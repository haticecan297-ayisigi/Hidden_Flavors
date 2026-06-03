import recipes from './data.js';

const recipeContainer = document.getElementById('recipe-container'); // ID düzeltildi
const searchInput = document.getElementById('search-input'); // Değişken tanımlandı
const eraFilter = document.getElementById('era-filter');   // Filtre elementi seçildi
const mainHeader = document.querySelector('header'); // Arama çubuğunun olduğu üst kısmı seçiyoruz
const btnShowFavs = document.getElementById('btn-show-favs'); // YENİ: Favori Butonu
const categoryFilter = document.getElementById('category-filter');    //Kategori filtresini seçelim
const homeContent = document.getElementById('home-content');

// Detay sayfası için yeni bir alan oluşturup <main> etiketinin içine ekliyoruz
let detailContainer = document.getElementById('recipe-detail-view');
if (!detailContainer) {
    detailContainer = document.createElement('section');
    detailContainer.id = 'recipe-detail-view';
    detailContainer.style.display = 'none'; // Başlangıçta gizli
    document.querySelector('main').appendChild(detailContainer);
}

// YENİ: Global filtreleme durumları ve Local Storage'dan favorileri çekme
let currentSearchTerm = '';
let currentEra = 'all';
let currentCategory = 'all';   //Kategori filtresinin varsayılan durumu
let showOnlyFavs = false; 
let favsFromStorage = localStorage.getItem('hiddenFlavorsFavs');
// Eğer veri varsa virgüllerden bölüp sayıya çeviriyoruz, yoksa boş dizi açıyoruz
let favorites = [];
let currentView = 'home';   //Uygulamanın anlık hangi sayfada olduğunu tutan değişken ('home', 'all', 'favorites')
let showOnlyMenu = false; //Günün menüsü filtresinin aktifliğini tutar

recipeContainer.style.display = 'none';   //Sayfa ilk açıldığında tarif container'ını gizle (Giriş sayfasında sadece Hero ve Footer kalacak)
// YENİ: "Start Exploring" ve "Logo" elementlerini seçip event listener bağlama
const btnStartExploring = document.getElementById('btn-start-exploring');
const siteLogo = document.getElementById('site-logo');

if (btnStartExploring) {
    btnStartExploring.addEventListener('click', () => {
        showOnlyMenu = false; //Normal keşfe başlarken menü filtresini kapat
        currentView = 'all';
        updateViewLayout();
    });
}

if (siteLogo) {
    siteLogo.addEventListener('click', () => {
        showOnlyMenu = false;
        currentView = 'home';
        // Ana sayfaya dönüldüğünde filtreleri de sıfırlamak iyi bir UX sağlar
        currentEra = 'all';
        currentCategory = 'all';
        if (eraFilter) eraFilter.value = 'all';
        if (categoryFilter) categoryFilter.value = 'all';
        updateViewLayout();
    });
}

function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";

    if (recipeList.length === 0) {
        recipeContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No recipes found matching your criteria.</p>`;
        return;
    }

    recipeList.forEach(recipe => {

        // YENİ: Kalp ikonunu belirleme (Dolu mu Boş mu?)
        const isFav = favorites.includes(recipe.id);
        const heartHtml = isFav 
            ? '<span class="heart-solid">♥</span>' 
            : '<span class="heart-outline">♡</span>';

        const card = `
            <div class="recipe-card">
                
                <button class="heart-btn" onclick="toggleFavorite(${recipe.id}, event)">
                    ${heartHtml}
                </button>

                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
                <div class="recipe-content">
                    <span class="era-badge">${recipe.era}</span>
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <p class="recipe-desc">${recipe.history.substring(0, 100)}...</p>
                    <div class="card-footer">
                        <button class="btn-view" onclick="viewDetails(${recipe.id})">View Details</button>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.innerHTML += card;
    });
}

// YENİ: Korumalı Favoriye Ekleme Fonksiyonu
window.toggleFavorite = function(id, event) {
    event.stopPropagation(); 

    // YENİ: Artık hiddenFlavorsCurrentUser anahtarını kontrol ediyoruz
    const currentUser = sessionStorage.getItem('hiddenFlavorsCurrentUser');
    
    if (!currentUser) {
        // Kullanıcı giriş yapmamışsa doğrudan Login ekranını aç (Alert yerine daha profesyonel)
        const modal = document.getElementById('login-modal');
        const loginFormView = document.getElementById('login-form-view');
        const registerFormView = document.getElementById('register-form-view');
        const loginEmailInput = document.getElementById('login-email');
        
        loginFormView.style.display = 'block';
        registerFormView.style.display = 'none';
        modal.style.display = 'block';
        loginEmailInput.focus();
        return;
    }

    // Giriş yapmışsa favori ekle/çıkar (JSON YOOOK)
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    const userFavsKey = 'hiddenFlavorsFavs_' + currentUser;
    localStorage.setItem(userFavsKey, favorites.join(','));
    filterRecipes(); 
};

// Ortak filtreleme fonksiyonu
function filterRecipes() {
    const filtered = recipes.filter(recipe => {
        // 1. Arama Çubuğu Eşleşmesi
        const matchesSearch = (
            recipe.name.toLowerCase().includes(currentSearchTerm) || 
            recipe.era.toLowerCase().includes(currentSearchTerm) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(currentSearchTerm))
        );
        
        // 2. Dönem Eşleşmesi
        const matchesEra = currentEra === 'all' || recipe.era === currentEra;
        
        // 3. Favori Eşleşmesi
        const matchesFav = !showOnlyFavs || favorites.includes(recipe.id); 

        // 4. YENİ: Kategori Eşleşmesi
        // currentCategory "all" ise direkt true döner. 
        // Değilse, virgülle böleriz (ör: "olive,vegetable" -> ["olive", "vegetable"]).
        // "some" fonksiyonu ile bu kelimelerden herhangi biri recipe.category içinde geçiyor mu diye bakarız.
        const matchesCategory = currentCategory === 'all' || 
            currentCategory.split(',').some(cat => recipe.category.toLowerCase().includes(cat));
        
        //Günün Menüsü Eşleşmesi
        const menuIds = [1, 23, 26]; // Menüdeki yemeklerin ID'leri
        const matchesMenu = !showOnlyMenu || menuIds.includes(recipe.id);
        // Tüm şartları sağlayanlar (true dönenler) listede kalır
        return matchesSearch && matchesEra && matchesFav && matchesCategory && matchesMenu;
    });
    displayRecipes(filtered);
}

// YENİ: Sayfa görünümlerine göre DOM elemanlarının gizlenip gösterilmesi
function updateViewLayout() {
    const heroSection = document.querySelector('.hero-section');
    const siteFooter = document.querySelector('.site-footer');

    //Her sayfa geçişinde (örneğin logoya tıklandığında) detay görünümünü kapat ve temizle
    if (detailContainer) {
        detailContainer.style.display = 'none';
        detailContainer.innerHTML = '';
    }
    
    //Üst menünün (header) her zaman görünür kaldığından emin olalım
    if (mainHeader) mainHeader.style.display = 'flex';
    
    if (currentView === 'home') {
        if (heroSection) heroSection.style.display = 'flex';
        if (siteFooter) siteFooter.style.display = 'block';
        if (recipeContainer) recipeContainer.style.display = 'none';
        if (homeContent) homeContent.style.display = 'block'; // Girişte GÖSTER
        if (heroSection) heroSection.style.display = 'flex';
        if (siteFooter) siteFooter.style.display = 'block';
        recipeContainer.style.display = 'none'; // İlk sayfada tarifler gizli
        showOnlyFavs = false;
        if (btnShowFavs) {
            btnShowFavs.classList.remove('active');
            btnShowFavs.innerHTML = '♡ My Favorites';
        }
    } 
    else if (currentView === 'all') {
        if (heroSection) heroSection.style.display = 'none';
        if (siteFooter) siteFooter.style.display = 'block';
        if (recipeContainer) recipeContainer.style.display = 'grid';
        if (homeContent) homeContent.style.display = 'none'; // Gizle
        if (heroSection) heroSection.style.display = 'none'; // Tüm tariflerde Hero olmasın
        if (siteFooter) siteFooter.style.display = 'block';  // Footer gözüksün
        recipeContainer.style.display = 'grid';
        showOnlyFavs = false;
        if (btnShowFavs) {
            btnShowFavs.classList.remove('active');
            btnShowFavs.innerHTML = '♡ My Favorites';
        }
        filterRecipes(); // Şartlara göre tarifleri listele
    } 
    else if (currentView === 'favorites') {
        if (heroSection) heroSection.style.display = 'none';
        if (siteFooter) siteFooter.style.display = 'none';   // İstek üzerine favorilerde footer gizli
        recipeContainer.style.display = 'grid';
        showOnlyFavs = true;
        if (btnShowFavs) {
            btnShowFavs.classList.add('active');
            btnShowFavs.innerHTML = '♥ Show All';
        }
        filterRecipes();
    }
}

// Arama Input Event Listener
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    filterRecipes();
});

// Dönem Filtresi Event Listener
eraFilter.addEventListener('change', (e) => {
    currentEra = e.target.value;
    filterRecipes();
    // Kategori Filtresi Event Listener
    if(categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            filterRecipes(); // Değişim olunca filtrelemeyi tetikle
        });
    }
});

// Favorileri Göster Butonu Güncellemesi
if(btnShowFavs) {
    btnShowFavs.addEventListener('click', () => {
        // Eğer zaten favorilerdeyse 'all' görünümüne geç, değilse 'favorites' görünümüne geç
        currentView = (currentView === 'favorites') ? 'all' : 'favorites';
        updateViewLayout();
    });
}

//Kullanıcı açılır menüden yeni bir dönem seçtiğinde filtrelemeyi tetikle
//eraFilter.addEventListener('change', filterRecipes);

//Sayfa ilk açıldığında göster
displayRecipes(recipes);

//Detayları Gör Fonksiyonu
window.viewDetails = function(id) {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) heroSection.style.display = 'none';

    // Tıklanan tarifi ID'sine göre bul
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    // Ana listeyi ve üst menüyü gizle
    recipeContainer.style.display = 'none';

    // Yapılış adımlarını HTML'e çevir (Bu sabit kalıyor)
    const instructionsHtml = recipe.instructions.map((step, index) => 
        `<li><strong>Step ${index + 1}:</strong> ${step}</li>`
    ).join('');

    //Zaman Çizelgesini HTML'e çevir
    const timelineHtml = recipe.timeline && recipe.timeline.length > 0 
        ? recipe.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">${item.event}</div>
            </div>
          `).join('')
        : `<p style="color: var(--text-muted); font-style: italic;">No timeline data available for this era.</p>`;


    // Check if the recipe is already favorited to set the initial button state
    const isFavInitial = favorites.includes(recipe.id);

    // Detay sayfası HTML'ini oluştur (Porsiyon seçici alan eklendi)
    detailContainer.innerHTML = `
        <div class="detail-page">
            <div class="detail-header">
                <div class="detail-title-box">
                    <span class="era-badge">${recipe.era}</span>
                    <span class="era-badge" style="background-color: var(--accent-green);">${recipe.category}</span>
                    <h1>${recipe.name}</h1>
                    
                    <div style="margin-bottom: 25px;">
                        <button id="btn-detail-fav" class="fav-filter-btn ${isFavInitial ? 'active' : ''}" onclick="toggleFavoriteFromDetail(${recipe.id})">
                            ${isFavInitial ? '♥ In My Favorites' : '♡ Add to Favorites'}
                        </button>
                    </div>

                    <p class="history-text">"${recipe.history}"</p>
                </div>
            </div>

            <div class="portion-calculator" style="margin-bottom: 30px; display: flex; align-items: center; gap: 15px; justify-content: center;">
                <span style="font-weight: bold; font-size: 1.1rem;">Portion calculator:</span>
                <button id="btn-decrease-portion" style="padding: 5px 12px; font-size: 1.2rem; cursor: pointer; border: 1px solid var(--primary-color); background: none; color: var(--primary-color); border-radius: 4px; font-weight: bold;">-</button>
                <span id="current-portion-val" style="font-size: 1.3rem; font-weight: bold; min-width: 30px; text-align: center;">${recipe.basePortion}</span>
                <button id="btn-increase-portion" style="padding: 5px 12px; font-size: 1.2rem; cursor: pointer; border: 1px solid var(--primary-color); background: var(--primary-color); color: white; border-radius: 4px; font-weight: bold;">+</button>
            </div>

            <div class="detail-body">
                <div class="detail-ingredients">
                    <h2>Ingredients</h2>
                    <ul id="ingredients-list"></ul> 
                </div>
                <div class="detail-instructions">
                    <h2>Instructions</h2>
                    <ul>${instructionsHtml}</ul>
                </div>
            </div>

            <div class="detail-timeline-section" style="margin-top: 50px;">
                <h2 class="timeline-section-title">Historical Timeline</h2>
                <div class="timeline-container">
                    ${timelineHtml}
                </div>
            </div>
        </div>
    `;

    // Malzemeleri dinamik olarak güncelleyen iç fonksiyon
    let currentPortion = recipe.basePortion;
    const ingredientsListEl = document.getElementById('ingredients-list');
    const currentPortionValEl = document.getElementById('current-portion-val');

    function updateIngredients() {
        currentPortionValEl.textContent = currentPortion;
        
        ingredientsListEl.innerHTML = recipe.ingredients.map(ing => {
            // Yeni miktarı oran-orantı ile hesapla: (Mevcut Porsiyon / Temel Porsiyon) * Temel Miktar
            // Virgüllü sayıların çok uzamaması için toFixed(1) kullanıp sonundaki gereksiz sıfırları temizliyoruz
            const calculatedAmount = ((currentPortion / recipe.basePortion) * ing.amount);
            const formattedAmount = Number(calculatedAmount.toFixed(1)); 

            return `
                <li>
                    <span class="amount">${formattedAmount} ${ing.unit}</span> 
                    <span class="ing-name">${ing.name}</span>
                </li>
            `;
        }).join('');
    }

    // İlk açılışta malzemeleri baz porsiyona göre bir kez basıyoruz
    updateIngredients();

    // Butonların tıklama olaylarını bağlıyoruz
    document.getElementById('btn-decrease-portion').addEventListener('click', () => {
        if (currentPortion > 1) { // 1 porsiyonun altına düşmesin
            currentPortion--;
            updateIngredients();
        }
    });

    document.getElementById('btn-increase-portion').addEventListener('click', () => {
        currentPortion++;
        updateIngredients();
    });

    // Detay sayfasını görünür yap ve ekranın en üstüne kaydır
    detailContainer.style.display = 'block';
    window.scrollTo(0, 0);
};

/*GERİ DÖNME FONKSİYONU
window.goBack = function() {
    // Detay sayfasını gizle ve temizle
    detailContainer.style.display = 'none';
    detailContainer.innerHTML = ''; 

    // Üst menüyü tekrar görünür yap
    mainHeader.style.display = 'flex'; 

    // Kullanıcı detay sayfasına girmeden önce hangi sayfadaysa düzeni oraya geri yükle
    updateViewLayout(); 
};*/

// --- HERO SLIDER ARCHITECTURE ---

const featuredRecipeIds = [1, 2, 7, 12, 22, 15, 23, 37, 27, 28, 44, 36, 38]; 
const sliderRecipes = recipes.filter(r => featuredRecipeIds.includes(r.id));

let sliderIndex = 0;
let sliderTimer;

function initHeroSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer || sliderRecipes.length === 0) return;

    sliderContainer.innerHTML = sliderRecipes.map((recipe, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: url('${recipe.image}');"></div>
    `).join('');

    const dotsContainer = document.getElementById('slider-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = sliderRecipes.map((_, index) => `
            <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `).join('');

        // Noktalara tıklama özelliği ekleme
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                goToSlide(index);
            });
        });
    }

    updateSlider();

    document.getElementById('hero-next-btn').addEventListener('click', () => {
        handleManualNavigation(1);
    });
    
    document.getElementById('hero-prev-btn').addEventListener('click', () => {
        handleManualNavigation(-1);
    });

    startAutoplay();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, idx) => {
        if (idx === sliderIndex) slide.classList.add('active');
        else slide.classList.remove('active');
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === sliderIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });

    const activeRecipe = sliderRecipes[sliderIndex];
    document.getElementById('hero-recipe-name').textContent = activeRecipe.name;
    
    const viewBtn = document.getElementById('hero-view-recipe-btn');
    viewBtn.onclick = () => {
        window.viewDetails(activeRecipe.id);
    };
}

function goToSlide(index) {
    sliderIndex = index;
    updateSlider();
    clearInterval(sliderTimer); // Otomatik kaymayı sıfırla ki kullanıcı izlerken hemen değişmesin
    startAutoplay();
}

function handleManualNavigation(direction) {
    sliderIndex = (sliderIndex + direction + sliderRecipes.length) % sliderRecipes.length;
    updateSlider();
    clearInterval(sliderTimer);
    startAutoplay();
}

function startAutoplay() {
    sliderTimer = setInterval(() => {
        sliderIndex = (sliderIndex + 1) % sliderRecipes.length;
        updateSlider();
    }, 5000); 
}

// --- ÜYELİK SİMÜLASYONU VE LOCAL STORAGE MANTIĞI ---

// DOM Elemanları - Modal & Auth
const modal = document.getElementById('login-modal');
const btnLoginTrigger = document.getElementById('btn-login-trigger');
const closeModalBtn = document.getElementById('close-modal');

const loginFormView = document.getElementById('login-form-view');
const registerFormView = document.getElementById('register-form-view');

const linkShowRegister = document.getElementById('link-show-register');
const linkShowLogin = document.getElementById('link-show-login');
const linkForgotPassword = document.getElementById('link-forgot-password');

const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const btnSubmitLogin = document.getElementById('btn-submit-login');

const registerEmailInput = document.getElementById('register-email');
const registerPasswordInput = document.getElementById('register-password');
const btnSubmitRegister = document.getElementById('btn-submit-register');

const userProfileDiv = document.getElementById('user-profile');
const userNameDisplay = document.getElementById('user-name-display');
const btnLogout = document.getElementById('btn-logout');

// Helper: Get users string (Format: "email1|pass1,email2|pass2") - NO JSON
function getUsers() {
    return localStorage.getItem('hiddenFlavorsUsers') || "";
}

function saveUser(email, password) {
    let usersStr = getUsers();
    const newUserStr = email + "|" + password;
    
    if (usersStr.length === 0) {
        usersStr = newUserStr;
    } else {
        usersStr = usersStr + "," + newUserStr;
    }
    localStorage.setItem('hiddenFlavorsUsers', usersStr);
}

function checkUserExists(email) {
    const usersStr = getUsers();
    if (!usersStr) return false;
    
    const userArray = usersStr.split(',');
    for (let i = 0; i < userArray.length; i++) {
        const userParts = userArray[i].split('|');
        if (userParts[0] === email) return true;
    }
    return false;
}

function validateLogin(email, password) {
    const usersStr = getUsers();
    if (!usersStr) return false;
    
    const userArray = usersStr.split(',');
    for (let i = 0; i < userArray.length; i++) {
        const userParts = userArray[i].split('|');
        if (userParts[0] === email && userParts[1] === password) return true;
    }
    return false;
}

// 1. Modal İçi Ekran Geçişleri (Login / Register / Forgot Password)
linkShowRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginFormView.style.display = 'none';
    registerFormView.style.display = 'block';
});

linkShowLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerFormView.style.display = 'none';
    loginFormView.style.display = 'block';
});

linkForgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    // No backend, so we just simulate an email sent
    alert("A password recovery link has been sent to your email address."); 
});

// Sayfa Yüklendiğinde Durumu Kontrol Et
function checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem('hiddenFlavorsCurrentUser');
    
    if (loggedInUser) {
        btnLoginTrigger.style.display = 'none';
        userProfileDiv.style.display = 'block';
        
        // E-posta adresinin '@' işaretinden önceki kısmını alarak karşılama mesajı oluşturur
        const displayName = loggedInUser.split('@')[0];
        userNameDisplay.textContent = `Welcome, ${displayName}!`;
        
        if(btnShowFavs) btnShowFavs.style.display = 'block';

        // YENİ: Giriş yapan kullanıcıya özel anahtarla favorileri yükle
        const userFavsKey = 'hiddenFlavorsFavs_' + loggedInUser;
        const favsFromStorage = localStorage.getItem(userFavsKey);
        favorites = favsFromStorage ? favsFromStorage.split(',').map(Number) : [];
        // Ekrandaki kalplerin güncel duruma göre çizilmesi için filtrelemeyi tetikle
        filterRecipes();
    } else {
        // Kullanıcı giriş yapmamışsa veya çıkış (logout) yapmışsa
        btnLoginTrigger.style.display = 'block';
        userProfileDiv.style.display = 'none';
        
        // Güvenlik ve senkronizasyon için bellekteki favori listesini sıfırla
        favorites = [];

        // GÖRÜNÜM YÖNETİMİ: Oturum yoksa görünümü ana sayfaya ('home') çek ve düzeni sıfırla
        currentView = 'home';
        updateViewLayout();
    }
}

// Modal Açma/Kapama İşlemleri
btnLoginTrigger.addEventListener('click', () => {
    loginFormView.style.display = 'block';
    registerFormView.style.display = 'none';
    modal.style.display = 'block';
    loginEmailInput.focus();
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Kayıt Ol (Sign Up) İşlemi
btnSubmitRegister.addEventListener('click', () => {
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();
    
    if (email.length === 0 || password.length === 0) {
        alert("Please fill in both email and password fields.");
        return;
    }

    if (checkUserExists(email)) {
        alert("An account with this email already exists. Please log in.");
        return;
    }

    // Save the new user to Local Storage
    saveUser(email, password);
    
    // Automatically log them in
    sessionStorage.setItem('hiddenFlavorsCurrentUser', email);
    
    // Clear inputs and close modal
    registerEmailInput.value = '';
    registerPasswordInput.value = '';
    modal.style.display = 'none';
    checkLoginStatus();
});

// Giriş Yap (Log In) İşlemi
btnSubmitLogin.addEventListener('click', () => {
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();
    
    if (email.length === 0 || password.length === 0) {
        alert("Please fill in both email and password fields.");
        return;
    }

    if (validateLogin(email, password)) {
        // Correct credentials, log them in
        sessionStorage.setItem('hiddenFlavorsCurrentUser', email);
        
        // Clear inputs and close modal
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
        modal.style.display = 'none';
       
        checkLoginStatus();
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Çıkış Yap (Logout) İşlemi
// btnLogout içi:
btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('hiddenFlavorsCurrentUser');
    currentView = 'home'; // Çıkış yapınca ana sayfaya at
    checkLoginStatus();
});


// Initialize
checkLoginStatus();
initHeroSlider();

// Favorileme Bekçilerini Güncelle (Detail Page)
window.toggleFavoriteFromDetail = function(id) {
    const currentUser = sessionStorage.getItem('hiddenFlavorsCurrentUser'); // NEW KEY
    
    if (!currentUser) {
        loginFormView.style.display = 'block';
        registerFormView.style.display = 'none';
        modal.style.display = 'block';
        loginEmailInput.focus();
        return;
    }

    
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    
    const userFavsKey = 'hiddenFlavorsFavs_' + currentUser;
    localStorage.setItem(userFavsKey, favorites.join(','));
    
    
    const btnDetailFav = document.getElementById('btn-detail-fav');
    const isFav = favorites.includes(id);
    
    if (isFav) {
        btnDetailFav.classList.add('active');
        btnDetailFav.innerHTML = '♥ In My Favorites';
    } else {
        btnDetailFav.classList.remove('active');
        btnDetailFav.innerHTML = '♡ Add to Favorites';
    }

    
    filterRecipes();
};

// --- ANA SAYFA DİNAMİK KART SİSTEMLERİ ---

function initHomeDashboard() {
    const recipeOfJanCard = document.getElementById('card-recipe-of-the-day');
    const menuOfJanCard = document.getElementById('card-menu-of-the-day');
    
    if(!recipeOfJanCard || !menuOfJanCard) return;

    // 1. GÜNÜN TARİFİ: Id'si 2 olan Mutancana'yı seçiyoruz
    const dailyRecipe = recipes.find(r => r.id === 2);
    if (dailyRecipe) {
        recipeOfJanCard.style.backgroundImage = `url('${dailyRecipe.image}')`;
        recipeOfJanCard.innerHTML = `
            <div class="card-overlay"></div>
            <div class="card-info">
                <span class="era-badge">Recipe of the Day</span>
                <h2>${dailyRecipe.name}</h2>
                <p>${dailyRecipe.history.substring(0, 120)}...</p>
            </div>
        `;
        // Tıklayınca detay sayfasına yönlendir
        recipeOfJanCard.addEventListener('click', () => {
            window.viewDetails(dailyRecipe.id);
        });
    }

    // 2. GÜNÜN MENÜSÜ: Çorba (id:1), Ana Yemek (id:23), Tatlı (id:26) kombinasyonu
    const menuIds = [1, 23, 26];
    const menuRecipes = recipes.filter(r => menuIds.includes(r.id));

    if (menuRecipes.length > 0) {
        
        // HTML İÇERİĞİ VE YENİ BUTON DÜZENİ BURADA
        menuOfJanCard.innerHTML = `
            <div class="menu-text-side">
                <div>
                    <span class="badge-label" style="color: var(--accent-gold); font-weight:bold;">TODAY'S MENU</span>
                    <h2 style="margin-top: 5px;">Historical Tasting</h2>
                </div>
                <ul class="menu-list">
                    ${menuRecipes.map(r => `
                        <li>
                            <span>${r.category}</span>
                            <strong>${r.name}</strong>
                        </li>
                    `).join('')}
                </ul>
                <button class="btn-primary" style="padding: 8px 15px; font-size:0.85rem;" onclick="exploreMenu()">Explore All</button>
            </div>
            <div class="menu-image-side" id="menu-slider-img"></div>
        `;

        // Menü İçi Otomatik Resim Geçiş Algoritması (Slider)
        const menuImgSide = document.getElementById('menu-slider-img');
        const menuImages = menuRecipes.map(r => r.image);
        let menuImgIndex = 0;

        // İlk resmi hemen yükle
        if (menuImgSide) menuImgSide.style.backgroundImage = `url('${menuImages[0]}')`;

        // Her 4 saniyede bir sıradaki resme geçiş yap
        setInterval(() => {
            if (menuImgSide) {
                menuImgIndex = (menuImgIndex + 1) % menuImages.length;
                menuImgSide.style.backgroundImage = `url('${menuImages[menuImgIndex]}')`;
            }
        }, 4000);
    }
}

// Dosyanın en altında initHeroSlider() çağrısının hemen altına ekle:
initHomeDashboard();

//Sadece menüdeki tarifleri göstermek için tetiklenen global fonksiyon
window.exploreMenu = function() {
    showOnlyMenu = true;  // Anahtarı aç
    currentView = 'all';  // Listeleme sayfasına geç
    updateViewLayout();   // Arayüzü güncelle
};
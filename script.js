import recipes from './data.js';

const recipeContainer = document.getElementById('recipe-container'); // ID düzeltildi
const searchInput = document.getElementById('search-input'); // Değişken tanımlandı
const eraFilter = document.getElementById('era-filter');   // Filtre elementi seçildi
const mainHeader = document.querySelector('header'); // Arama çubuğunun olduğu üst kısmı seçiyoruz
const btnShowFavs = document.getElementById('btn-show-favs'); // YENİ: Favori Butonu

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
let showOnlyFavs = false; 
let favsFromStorage = localStorage.getItem('hiddenFlavorsFavs');
// Eğer veri varsa virgüllerden bölüp sayıya çeviriyoruz, yoksa boş dizi açıyoruz
let favorites = [];

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

// Ortak filtreleme fonksiyonu (Hem arama hem dönem filtresi birlikte çalışır)
function filterRecipes() {
    const filtered = recipes.filter(recipe => {
        const matchesSearch = (
            recipe.name.toLowerCase().includes(currentSearchTerm) || 
            recipe.era.toLowerCase().includes(currentSearchTerm) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(currentSearchTerm))
        );
        
        const matchesEra = currentEra === 'all' || recipe.era === currentEra;
        const matchesFav = !showOnlyFavs || favorites.includes(recipe.id); // YENİ: Favori Filtresi
        
        return matchesSearch && matchesEra && matchesFav;
    });
    displayRecipes(filtered);
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
});

// YENİ: Favorileri Göster Butonu
if(btnShowFavs) {
    btnShowFavs.addEventListener('click', () => {
        showOnlyFavs = !showOnlyFavs;
        if (showOnlyFavs) {
            btnShowFavs.classList.add('active');
            btnShowFavs.innerHTML = '♥ Show All';
        } else {
            btnShowFavs.classList.remove('active');
            btnShowFavs.innerHTML = '♡ My Favorites';
        }
        filterRecipes();
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
    mainHeader.style.display = 'none';

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
            <button class="back-btn" onclick="goBack()">&#8592; Back to main page</button>
            
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

//GERİ DÖNME FONKSİYONU
window.goBack = function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) heroSection.style.display = 'flex';
    
    // Detay sayfasını gizle ve temizle
    detailContainer.style.display = 'none';
    detailContainer.innerHTML = ''; 

    // Ana listeyi ve üst menüyü tekrar görünür yap
    recipeContainer.style.display = 'grid'; 
    mainHeader.style.display = 'flex'; 
};

// --- HERO SLIDER ARCHITECTURE ---

const featuredRecipeIds = [1, 2, 7, 12, 22, 15, 23, 37, 27, 28]; 
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
    } else {
        btnLoginTrigger.style.display = 'block';
        userProfileDiv.style.display = 'none';
        
        if(btnShowFavs) {
            btnShowFavs.style.display = 'none';
            showOnlyFavs = false;
            btnShowFavs.classList.remove('active');
            btnShowFavs.innerHTML = '♡ My Favorites';
        }
        // Kullanıcı yoksa favori listesini sıfırla
        favorites = [];
    }
    
    // Ekrandaki kalplerin güncel duruma göre çizilmesi için filtrelemeyi tetikle
    filterRecipes();
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
btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('hiddenFlavorsCurrentUser');
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
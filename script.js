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
let favorites = JSON.parse(localStorage.getItem('hiddenFlavorsFavs')) || [];

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
    event.stopPropagation(); // Karta tıklanmasını engeller

    // Bekçi: Kullanıcı giriş yapmış mı?
    const currentUser = localStorage.getItem('hiddenFlavorsUser');
    
    if (!currentUser) {
        alert("🔒 Please log in to add recipes to your favorites!");
        const modal = document.getElementById('login-modal');
        const usernameInput = document.getElementById('username-input');
        modal.style.display = 'block'; 
        usernameInput.focus();
        return;
    }

    // Giriş yapmışsa favori ekle/çıkar
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('hiddenFlavorsFavs', JSON.stringify(favorites));
    filterRecipes(); // Ekranı güncelle
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



    // Detay sayfası HTML'ini oluştur (Porsiyon seçici alan eklendi)
    detailContainer.innerHTML = `
        <div class="detail-page">
            <button class="back-btn" onclick="goBack()">&#8592; Back to main page</button>
            
            <div class="detail-header">
                <div class="detail-title-box">
                    <span class="era-badge">${recipe.era}</span>
                    <span class="era-badge" style="background-color: var(--accent-green);">${recipe.category}</span>
                    <h1>${recipe.name}</h1>
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
    // Detay sayfasını gizle ve temizle
    detailContainer.style.display = 'none';
    detailContainer.innerHTML = ''; 

    // Ana listeyi ve üst menüyü tekrar görünür yap
    recipeContainer.style.display = 'grid'; 
    mainHeader.style.display = 'flex'; 
};

// --- ÜYELİK SİMÜLASYONU VE LOCAL STORAGE MANTIĞI ---

// DOM Elemanları
const modal = document.getElementById('login-modal');
const btnLoginTrigger = document.getElementById('btn-login-trigger');
const closeModalBtn = document.getElementById('close-modal');
const btnSubmitLogin = document.getElementById('btn-submit-login');
const usernameInput = document.getElementById('username-input');

const userProfileDiv = document.getElementById('user-profile');
const userNameDisplay = document.getElementById('user-name-display');
const btnLogout = document.getElementById('btn-logout');

// 1. Sayfa yüklendiğinde kullanıcının giriş yapıp yapmadığını kontrol et
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('hiddenFlavorsUser');
    
    if (loggedInUser) {
        // Kullanıcı giriş yapmışsa
        btnLoginTrigger.style.display = 'none'; // Login butonunu gizle
        userProfileDiv.style.display = 'block'; // Profil alanını göster
        userNameDisplay.textContent = `Welcome, ${loggedInUser}!`; // İsmi yaz
        if(btnShowFavs) btnShowFavs.style.display = 'block'; // YENİ: Giriş yapınca butonu göster
    } else {
        // Kullanıcı giriş yapmamışsa
        btnLoginTrigger.style.display = 'block';
        userProfileDiv.style.display = 'none';

        // YENİ: Çıkış yapınca butonu gizle ve filtreyi sıfırla
        if(btnShowFavs) {
            btnShowFavs.style.display = 'none';
            showOnlyFavs = false;
            btnShowFavs.classList.remove('active');
            btnShowFavs.innerHTML = '♡ My Favorites';
        }
        filterRecipes(); // Ekranı herkesin göreceği hale geri getir
    }

}

// 2. Modal (Pop-up) Açma ve Kapama İşlemleri
btnLoginTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
    usernameInput.focus(); // İmleci otomatik olarak inputun içine koy
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Modalın dışındaki gri alana tıklayınca da kapansın
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 3. Kullanıcı Girişi Yapma (Local Storage'a Kaydetme)
btnSubmitLogin.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    
    if (username.length > 0) {
        // İsmi tarayıcı hafızasına kaydet
        localStorage.setItem('hiddenFlavorsUser', username);
        
        // Inputu temizle ve pop-up'ı kapat
        usernameInput.value = '';
        modal.style.display = 'none';
        
        // Arayüzü güncelle
        checkLoginStatus();
    } else {
        alert("Please enter a valid name.");
    }
});

// Input içindeyken "Enter" tuşuna basıldığında da giriş yapsın
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnSubmitLogin.click();
    }
});

// 4. Çıkış Yapma İşlemi
btnLogout.addEventListener('click', () => {
    // Hafızadan kullanıcıyı sil
    localStorage.removeItem('hiddenFlavorsUser');
    
    // Arayüzü güncelle
    checkLoginStatus();
});

// Sayfa ilk yüklendiğinde durumu kontrol et
checkLoginStatus();


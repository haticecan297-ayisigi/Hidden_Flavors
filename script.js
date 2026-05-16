import recipes from './data.js';

const recipeContainer = document.getElementById('recipe-container'); // ID düzeltildi
const searchInput = document.getElementById('search-input'); // Değişken tanımlandı
const mainHeader = document.querySelector('header'); // Arama çubuğunun olduğu üst kısmı seçiyoruz
const eraFilter = document.getElementById('era-filter'); // Filtre elementi seçildi

// Detay sayfası için yeni bir alan oluşturup <main> etiketinin içine ekliyoruz
let detailContainer = document.getElementById('recipe-detail-view');
if (!detailContainer) {
    detailContainer = document.createElement('section');
    detailContainer.id = 'recipe-detail-view';
    detailContainer.style.display = 'none'; // Başlangıçta gizli
    document.querySelector('main').appendChild(detailContainer);
}

// Global filtreleme durumları
let currentSearchTerm = '';
let currentEra = 'all';

function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";

    if (recipeList.length === 0) {
        recipeContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No recipes found matching your criteria.</p>`;
        return;
    }

    recipeList.forEach(recipe => {
        const card = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
                <div class="recipe-content">
                    <span class="era-badge">${recipe.era}</span>
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <p class="recipe-desc">${recipe.history.substring(0, 100)}...</p>
                    <div class="card-footer">
                        <button class="btn-favorite" onclick="viewDetails(${recipe.id})">View Details</button>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.innerHTML += card;
    });
}

// Ortak filtreleme fonksiyonu (Hem arama hem dönem filtresi birlikte çalışır)
function filterRecipes() {
    const filtered = recipes.filter(recipe => {
        const matchesSearch = (
            recipe.name.toLowerCase().includes(currentSearchTerm) || 
            recipe.era.toLowerCase().includes(currentSearchTerm) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(currentSearchTerm))
        );
        
        const matchesEra = currentEra === 'all' || recipe.era === currentEra;
        
        return matchesSearch && matchesEra;
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

// Sayfa ilk açıldığında göster
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
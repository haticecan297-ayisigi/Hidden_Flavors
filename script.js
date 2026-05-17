import recipes from './data.js';

const recipeContainer = document.getElementById('recipe-container'); // ID düzeltildi
const searchInput = document.getElementById('search-input'); // Değişken tanımlandı
const eraFilter = document.getElementById('era-filter');
const mainHeader = document.querySelector('header'); // Arama çubuğunun olduğu üst kısmı seçiyoruz

// Detay sayfası için yeni bir alan oluşturup <main> etiketinin içine ekliyoruz
let detailContainer = document.getElementById('recipe-detail-view');
if (!detailContainer) {
    detailContainer = document.createElement('section');
    detailContainer.id = 'recipe-detail-view';
    detailContainer.style.display = 'none'; // Başlangıçta gizli
    document.querySelector('main').appendChild(detailContainer);
}

function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";
    recipeList.forEach(recipe => {
        const card = `
            <div class="recipe-card">
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

//Arama ve açılır menü filtreleme sistemi
function filterRecipes() {
    //Yazılan metni ve seçilen dönemi al
    const searchTerm = searchInput.value.toLowerCase();
    const selectedEra = eraFilter.value;

    //Tarifleri filtreleme
    const filtered = recipes.filter(recipe => {
        //Arama kutusu eşleşmesi
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) || 
                              recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm));
        
        //Dönem eşleşmesi
        const matchesEra = selectedEra === 'all' || recipe.era.includes(selectedEra);

        //Her iki şartı da sağlayanları ekranda bırakma
        return matchesSearch && matchesEra;
    });

    //Filtrelenmiş listeyi ekrana bas
    displayRecipes(filtered);
}

//Event Listeners
//Kullanıcı arama kutusuna bir şey yazdığında filtrelemeyi tetikle
searchInput.addEventListener('input', filterRecipes);

//Kullanıcı açılır menüden yeni bir dönem seçtiğinde filtrelemeyi tetikle
eraFilter.addEventListener('change', filterRecipes);

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

    // Malzemeler listesini HTML'e çevir
    const ingredientsHtml = recipe.ingredients.map(ing => 
        `<li>${ing.amount} ${ing.unit} ${ing.name}</li>`
    ).join('');

    // Yapılış adımlarını HTML'e çevir
    const instructionsHtml = recipe.instructions.map((step, index) => 
        `<li><strong>Step ${index + 1}:</strong> ${step}</li>`
    ).join('');

    // Detay sayfası HTML'ini oluştur
    detailContainer.innerHTML = `
        <div class="detail-page">
            <button class="back-btn" onclick="goBack()">&#8592; Ana Sayfaya Dön</button>
            
            <div class="detail-header">
                <div class="detail-title-box">
                    <span class="era-badge">${recipe.era}</span>
                    <span class="era-badge" style="background-color: var(--accent-green);">${recipe.category}</span>
                    <h1>${recipe.name}</h1>
                    <p class="history-text">"${recipe.history}"</p>
                </div>
            </div>

            <div class="detail-body">
                <div class="detail-ingredients">
                    <h2>Ingredients</h2>
                    <ul>${ingredientsHtml}</ul>
                </div>
                <div class="detail-instructions">
                    <h2>Instructions</h2>
                    <ul>${instructionsHtml}</ul>
                </div>
            </div>
        </div>
    `;

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
import recipes from './data.js';

const recipeContainer = document.getElementById('recipe-container'); // ID düzeltildi
const searchInput = document.getElementById('search-input'); // Değişken tanımlandı

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

// Arama Motoru
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(term) || 
            recipe.era.toLowerCase().includes(term) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(term))
        );
    });
    displayRecipes(filtered);
});

// Sayfa ilk açıldığında göster
displayRecipes(recipes);

//Detayları Gör (Modal) Fonksiyonu
// (Modül yapısı kullandığımız için window objesine ekliyoruz ki HTML'deki onclick erişebilsin)
window.viewDetails = function(id) {
    // Tıklanan tarifi ID'sine göre bul
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    // Eğer sayfada zaten bir modal varsa önce onu kaldıralım
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    // Malzemeler listesini HTML'e çevir
    const ingredientsHtml = recipe.ingredients.map(ing => 
        `<li>${ing.amount} ${ing.unit} ${ing.name}</li>`
    ).join('');

    // Yapılış adımlarını HTML'e çevir
    const instructionsHtml = recipe.instructions.map((step, index) => 
        `<li><strong>Adım ${index + 1}:</strong> ${step}</li>`
    ).join('');

    // Modal (Açılır Pencere) HTML'ini oluştur
    const modalHtml = `
        <div class="modal-overlay" id="recipe-modal" onclick="closeModal(event)">
            <div class="modal-content">
                <span class="close-btn" onclick="closeModal(event)">&times;</span>
                <div class="modal-header">
                    <h2>${recipe.name}</h2>
                    <span class="era-badge">${recipe.era}</span>
                </div>
                <div class="modal-body">
                    <div class="ingredients-section">
                        <h3>Malzemeler</h3>
                        <ul>${ingredientsHtml}</ul>
                    </div>
                    <div class="instructions-section">
                        <h3>Yapılışı</h3>
                        <ul>${instructionsHtml}</ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Modalı body'nin sonuna ekle
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

//Modalı Kapatma Fonksiyonu
window.closeModal = function(event) {
    // Çarpı ikonuna veya modal dışındaki karanlık alana tıklandıysa kapat
    if (event.target.classList.contains('close-btn') || event.target.classList.contains('modal-overlay')) {
        const modal = document.querySelector('.modal-overlay');
        if (modal) modal.remove();
    }
};
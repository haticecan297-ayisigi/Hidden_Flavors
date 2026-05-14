import recipes from "./data.js";

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
                        <button class="btn-favorite" onclick="viewDetails(${recipe.id})">Detayları Gör</button>
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
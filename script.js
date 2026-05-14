import recipes from "./data.js";  //İçeri aktarıyoruz

//Verilerin geldiğinde emin olmak için terminale yazdıalım
console.log("Tarifler başarıyla yüklendi", recipes);

const recipeContainer = document.getElementById('recipeList');
function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";
    recipeList.forEach(recipe => { // Burası forEach olmalı
        const card = `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p><strong>Dönem:</strong> ${recipe.era}</p>
                <p>${recipe.history.substring(0, 100)}...</p>
                <button onclick="viewDetails(${recipe.id})">Detayları Gör</button>
            </div>
        `;
        recipeContainer.innerHTML += card;
    });
}

//Sayfa ilk açıldığında tüm tarifleri göster
displayRecipes(recipes);

//Bu veriyi script.js dosyasında kullanabilmek için dışa aktarıyorum
export default recipes;

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase(); // Küçük harfe çevirerek arama yapıyoruz

    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(term) || 
            recipe.era.toLowerCase().includes(term) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(term))
        );
    });

    displayRecipes(filtered); // Sadece filtrelenmiş olanları ekrana bas
});
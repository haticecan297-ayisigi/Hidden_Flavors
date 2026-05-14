import recipes from "./data.js";  //İçeri aktarıyoruz

//Verilerin geldiğinde emin olmak için terminale yazdıalım
console.log("Tarifler başarıyla yüklendi", recipes);

const recipeContainer = document.getElementById('recipeList');
function displayRecipes(recipeList){
    //Önce içini boşaltalım ki eski sonuçlar kalmasın
    recipeContainer.innerHTML = "";
    recipeContainer.onbeforematch(recipe =>{
        const card = `
        <div class="recipe-card">
            <h3>${recipe.name}</h3>
            <p><strong>Dönem:</strong> ${recipe.era}</p>
            <p>${recipe.history.substring(0,100)}...</p>
            <button onclick="viewDeatils(${recipe.id})">Detaylar Gör</button>
        </div>  
    `;
    recipeContainer.innerHTML += card;
    });
}

//Sayfa ilk açıldığında tüm tarifleri göster
displayRecipes(recipes);
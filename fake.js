
const fakestoreBtn = document.getElementById("fakestoreBtn");
const dummyjsonBtn = document.getElementById("dummyjsonBtn");
const container = document.getElementById("output-container");

fakestoreBtn.addEventListener("click", () => {
    container.innerHTML = "Loading Fakestore data...";

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            container.innerHTML = ""; // clear loader
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(() => container.innerHTML = "Error loading Fakestore data.");
});

dummyjsonBtn.addEventListener("click", () => {
    container.innerHTML = "Loading DummyJSON data...";

    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const recipes = data.recipes;
            container.innerHTML = ""; 
            recipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                    <p>Prep Time: ${recipe.prepTimeMinutes} mins</p>
                    <p>Cook Time: ${recipe.cookTimeMinutes} mins</p>
            
                `;
                container.appendChild(card);
            });
        })
        .catch(() => container.innerHTML = "Error loading DummyJSON data.");
});

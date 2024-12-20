const products = [
    { id: 1, name: "Wooden Chair", price: "₹1,500" },
    { id: 2, name: "Dining Table", price: "₹8,000" },
    { id: 3, name: "Sofa Set", price: "₹20,000" },
    { id: 4, name: "Bed Frame", price: "₹15,000" }
  ];
  
  const favorites = new Set();
  
  function renderProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
  
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button class="favorite-btn ${favorites.has(product.id) ? 'active' : ''}" 
          data-id="${product.id}">
          ${favorites.has(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      `;
  
      productsContainer.appendChild(productDiv);
    });
  
    attachEventListeners();
  }
  
  function toggleFavorite(productId) {
    if (favorites.has(productId)) {
      favorites.delete(productId);
    } else {
      favorites.add(productId);
    }
    renderProducts();
  }
  
  function attachEventListeners() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach(button => {
      button.addEventListener("click", () => {
        const productId = parseInt(button.getAttribute("data-id"));
        toggleFavorite(productId);
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderProducts);
  
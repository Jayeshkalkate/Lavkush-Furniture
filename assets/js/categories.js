furnitureData.push({
  category: "tables",
  name: "Nesting Table",
  price: 20000,
  image: "assets/images/categories/nestingtable.png",
});


// Furniture data in JSON format
const furnitureData = [
  {
    category: "sofas",
    name: "Sectional Sofa",
    price: 25000,
    image: "assets/images/categories/sofaimage.png",
  },
  {
    category: "beds",
    name: "King Bed",
    price: 30000,
    image: "assets/images/categories/bedimage.png",
  },
  {
    category: "chairs",
    name: "Gaming Chair",
    price: 15000,
    image: "assets/images/categories/chairimage.png",
  },
  {
    category: "tables",
    name: "Dining Table",
    price: 18000,
    image: "assets/images/categories/tableimage.png",
  },
];

// Elements
const categoryFilter = document.getElementById("category-filter");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const dynamicFilters = document.querySelectorAll(".dynamic-filter");
const categoriesSection = document.querySelector(".categories");

// Populate dynamic filters
const dropdownOptions = {
  sofas: ["Sectional Sofa", "Chesterfield Sofa", "Sleeper Sofa", "Loveseat", "Recliner Sofa"],
  beds: ["Single Bed", "Double Bed", "Queen Bed", "King Bed", "Bunk Bed"],
  chairs: ["Dining Chair", "Armchair", "Recliner Chair", "Gaming Chair", "Office Chair"],
  tables: ["Dining Table", "Coffee Table", "Study Table", "Side Table", "Bar Table"],
};

Object.keys(dropdownOptions).forEach((category) => {
  const filterElement = document.getElementById(`${category}-filter`);
  const selectElement = filterElement.querySelector("select");
  dropdownOptions[category].forEach((option) => {
    const newOption = document.createElement("option");
    newOption.value = option.toLowerCase().replace(/\s+/g, "-");
    newOption.textContent = option;
    selectElement.appendChild(newOption);
  });
});

// Render categories based on JSON data
function renderCategories(data) {
  categoriesSection.innerHTML = ""; // Clear existing categories
  data.forEach((item) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";
    categoryDiv.dataset.category = item.category;
    categoryDiv.dataset.price = item.price;

    categoryDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;
    categoriesSection.appendChild(categoryDiv);
  });
}

// Filter functionality
function filterFurniture() {
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseInt(priceRange.value, 10);

  let filteredData = furnitureData.filter((item) => item.price <= maxPrice);

  if (selectedCategory !== "all") {
    filteredData = filteredData.filter((item) => item.category === selectedCategory);
  }

  renderCategories(filteredData);

  // Show/hide dynamic filters
  dynamicFilters.forEach((filter) => (filter.style.display = "none"));
  if (dropdownOptions[selectedCategory]) {
    document.getElementById(`${selectedCategory}-filter`).style.display = "block";
  }
}

// Price range update
priceRange.addEventListener("input", () => {
  priceValue.textContent = `Up to ₹${priceRange.value}`;
  filterFurniture();
});

// Category filter update
categoryFilter.addEventListener("change", () => {
  filterFurniture();
});

// Initialize
renderCategories(furnitureData);
filterFurniture();

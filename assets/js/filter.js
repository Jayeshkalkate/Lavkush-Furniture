    // Furniture types for each category
    const furnitureTypes = {
      sofa: ["Sectional", "Recliner", "Sleeper"],
      bed: ["Single", "Double", "Queen", "King"],
      table: ["Dining Table", "Coffee Table", "Side Table"],
      chair: ["Office Chair", "Dining Chair", "Rocking Chair"]
    };

    const furnitureCategory = document.getElementById("furnitureCategory");
    const typeContainer = document.getElementById("typeContainer");
    const furnitureType = document.getElementById("furnitureType");
    const applyFilter = document.getElementById("applyFilter");
    const resultsList = document.getElementById("resultsList");

    // Event listener for category selection
    furnitureCategory.addEventListener("change", () => {
      const selectedCategory = furnitureCategory.value;

      // Show or hide the type container
      if (selectedCategory) {
        typeContainer.classList.remove("hidden");
        furnitureType.innerHTML = `<option value="">-- Select Type --</option>`; // Reset options

        // Populate types based on category
        furnitureTypes[selectedCategory].forEach(type => {
          const option = document.createElement("option");
          option.value = type.toLowerCase();
          option.textContent = type;
          furnitureType.appendChild(option);
        });
      } else {
        typeContainer.classList.add("hidden");
        furnitureType.innerHTML = ""; // Clear options
      }
    });

    // Event listener for apply filter button
    applyFilter.addEventListener("click", () => {
      const category = furnitureCategory.value;
      const type = furnitureType.value;
      const minPrice = document.getElementById("minPrice").value;
      const maxPrice = document.getElementById("maxPrice").value;

      // Clear previous results
      resultsList.innerHTML = "";

      // Mock results (replace with real filtering logic if necessary)
      const results = [
        `Category: ${category || "Not Selected"}`,
        `Type: ${type || "Not Selected"}`,
        `Price Range: ${minPrice || "No Min"} - ${maxPrice || "No Max"}`
      ];

      // Display results
      results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        resultsList.appendChild(li);
      });
    });

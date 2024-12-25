document.addEventListener('DOMContentLoaded', function () {
  const furnitureCategory = document.getElementById('furnitureCategory');
  const furnitureTypeContainer = document.getElementById('typeContainer');
  const furnitureType = document.getElementById('furnitureType');
  const applyFilterButton = document.getElementById('applyFilter');
  const resultsList = document.getElementById('resultsList');
  const priceRange = document.getElementById('priceRange');
  const minPriceDisplay = document.getElementById('minPriceDisplay');
  const maxPriceDisplay = document.getElementById('maxPriceDisplay');

  const image = document.getElementById('image');
  const description = document.getElementById('description');
  const availability = document.getElementById('availability');
  const features = document.getElementById('features');

  // Sample furniture data
  const furnitureData = [
    {
      "category": "sofa",
      "types": [
        { 
            "type": "3-Seater", 
            "price": 5000, 
            "image": "", 
            "description": "A comfortable 3-seater sofa with ergonomic design and durable material.", 
            "availability": "In stock", 
            "features": ["Ergonomic design", "Durability"] 
        },
        { 
            "type": "L-Shaped", 
            "price": 8000, 
            "image": "", 
            "description": "An L-shaped sofa ideal for spacious rooms with a modern design.", 
            "availability": "Pre-order", 
            "features": ["Stylish design", "Ample seating space"] 
        },
        { 
            "type": "2-Seater", 
            "price": 4000, 
            "image": "", 
            "description": "A compact 2-seater sofa perfect for small spaces or cozy corners.", 
            "availability": "In stock", 
            "features": ["Space-saving", "Comfortable"] 
        },
        { 
            "type": "3-Seater", 
            "price": 5000, 
            "image": "", 
            "description": "Material, dimensions, style", 
            "availability": "In stock", 
            "features": [] 
        },
        { 
            "type": "4-Seater", 
            "price": 7000, 
            "image": "", 
            "description": "Spacious 4-seater sofa for larger living rooms.", 
            "availability": "Out of stock", 
            "features": ["Comfortable", "Large seating capacity"] 
        },
        { 
            "type": "L-Shape", 
            "price": 8000, 
            "image": "", 
            "description": "Modern L-shaped sofa with stylish design and ample seating space.", 
            "availability": "In stock", 
            "features": ["Flexible arrangement", "Comfortable seating"] 
        },
        { 
            "type": "Recliner", 
            "price": 9000, 
            "image": "", 
            "description": "Recliner sofa with adjustable backrest and footrest for comfort.", 
            "availability": "In stock", 
            "features": ["Adjustable features", "Luxury feel"] 
        },
        { 
            "type": "Sectional", 
            "price": 10000, 
            "image": "", 
            "description": "Sectional sofa set with flexible arrangement options.", 
            "availability": "In stock", 
            "features": ["Customizable layout", "Comfortable for large families"] 
        },
        { 
            "type": "Chaise Lounge", 
            "price": 6000, 
            "image": "", 
            "description": "A stylish chaise lounge ideal for relaxation and additional seating.", 
            "availability": "In stock", 
            "features": ["Relaxation", "Modern design"] 
        },
        { 
            "type": "Corner Sofa", 
            "price": 7500, 
            "image": "", 
            "description": "Corner sofa for maximizing corner space and comfort.", 
            "availability": "Pre-order", 
            "features": ["Compact design", "Comfortable corner seating"] 
        },
        { 
            "type": "Sofa Bed", 
            "price": 11000, 
            "image": "", 
            "description": "Sofa bed with a pull-out bed mechanism for dual functionality.", 
            "availability": "In stock", 
            "features": ["Multi-functional", "Space-saving"] 
        },
        { 
            "type": "Wooden Sofa", 
            "price": 12000, 
            "image": "", 
            "description": "A sturdy wooden sofa with classic design and high durability.", 
            "availability": "In stock", 
            "features": ["Timeless design", "Durability"] 
        },
        { 
            "type": "Fabric Sofa", 
            "price": 5500, 
            "image": "", 
            "description": "Comfortable fabric sofa with soft cushioning and stylish design.", 
            "availability": "In stock", 
            "features": ["Soft fabric", "Stylish design"] 
        },
        { 
            "type": "Leather Sofa", 
            "price": 15000, 
            "image": "", 
            "description": "Premium leather sofa offering luxurious comfort and timeless elegance.", 
            "availability": "Pre-order", 
            "features": ["Premium material", "Luxury appearance"] 
        },
        { 
            "type": "Jharokha Sofa", 
            "price": 13000, 
            "image": "", 
            "description": "Jharokha-style sofa inspired by traditional designs with modern touches.", 
            "availability": "In stock", 
            "features": ["Traditional design", "Modern comfort"] 
        },
        { 
            "type": "Maharashtrian Sofa", 
            "price": 14000, 
            "image": "", 
            "description": "A traditional Maharashtrian style sofa with intricate carvings and woodwork.", 
            "availability": "In stock", 
            "features": ["Traditional craftsmanship", "Handmade details"] 
        }
    ]
    
    },
    {
      "category": "bed",
      "types": [
        { 
            "type": "Queen Size", 
            "price": 7000, 
            "image": "", 
            "description": "Comfortable queen size bed with stylish design.", 
            "availability": "In stock", 
            "features": ["Spacious", "Stylish design"] 
        },
        { 
            "type": "Single Bed", 
            "price": 5000, 
            "image": "", 
            "description": "Compact single bed ideal for smaller rooms.", 
            "availability": "In stock", 
            "features": ["Compact", "Space-saving"] 
        },
        { 
            "type": "Double Bed", 
            "price": 7000, 
            "image": "", 
            "description": "Standard double bed with sturdy construction.", 
            "availability": "Out of stock", 
            "features": ["Durable", "Comfortable"] 
        },
        { 
            "type": "King Size Bed", 
            "price": 10000, 
            "image": "", 
            "description": "Large king size bed with luxurious feel.", 
            "availability": "Pre-order", 
            "features": ["Spacious", "Elegant design"] 
        },
        { 
            "type": "Queen Size Bed", 
            "price": 8000, 
            "image": "", 
            "description": "Elegant queen size bed with premium material.", 
            "availability": "In stock", 
            "features": ["Stylish", "Comfortable"] 
        },
        { 
            "type": "Bunk Bed", 
            "price": 6000, 
            "image": "", 
            "description": "Space-saving bunk bed suitable for kids' rooms.", 
            "availability": "In stock", 
            "features": ["Compact design", "Multi-level"] 
        },
        { 
            "type": "Storage Bed", 
            "price": 12000, 
            "image": "", 
            "description": "Storage bed with ample space for storage underneath.", 
            "availability": "In stock", 
            "features": ["Functional", "Storage space"] 
        },
        { 
            "type": "Murphy Bed", 
            "price": 15000, 
            "image": "", 
            "description": "Innovative Murphy bed for space-saving functionality.", 
            "availability": "Pre-order", 
            "features": ["Space-saving", "Modern design"] 
        },
        { 
            "type": "Platform Bed", 
            "price": 9000, 
            "image": "", 
            "description": "Stylish platform bed with a minimalist look.", 
            "availability": "In stock", 
            "features": ["Minimalist design", "Comfortable"] 
        },
        { 
            "type": "Divan Bed", 
            "price": 7000, 
            "image": "", 
            "description": "Divan bed with upholstered base and storage options.", 
            "availability": "In stock", 
            "features": ["Storage", "Comfortable seating"] 
        },
        { 
            "type": "Folding Bed", 
            "price": 4000, 
            "image": "", 
            "description": "Portable folding bed for temporary use or small spaces.", 
            "availability": "In stock", 
            "features": ["Portable", "Space-saving"] 
        },
        { 
            "type": "Day Bed", 
            "price": 6500, 
            "image": "", 
            "description": "Day bed suitable for lounging or occasional sleeping.", 
            "availability": "In stock", 
            "features": ["Multi-functional", "Comfortable"] 
        },
        { 
            "type": "Loft Bed", 
            "price": 7500, 
            "image": "", 
            "description": "Loft bed with elevated design and desk space underneath.", 
            "availability": "Out of stock", 
            "features": ["Space-saving", "Functional"] 
        },
        { 
            "type": "Trundle Bed", 
            "price": 8500, 
            "image": "", 
            "description": "Trundle bed with an additional pull-out bed underneath.", 
            "availability": "In stock", 
            "features": ["Dual functionality", "Compact design"] 
        },
        { 
            "type": "Sofa Bed", 
            "price": 10000, 
            "image": "", 
            "description": "Sofa bed with a pull-out bed mechanism for dual functionality.", 
            "availability": "In stock", 
            "features": ["Multi-functional", "Comfortable seating"] 
        },
        { 
            "type": "Water Bed", 
            "price": 20000, 
            "image": "", 
            "description": "Luxury water bed offering therapeutic comfort.", 
            "availability": "Pre-order", 
            "features": ["Therapeutic support", "Premium material"] 
        },
        { 
            "type": "Wooden Bed", 
            "price": 9500, 
            "image": "", 
            "description": "Sturdy wooden bed with classic design and durability.", 
            "availability": "In stock", 
            "features": ["Durability", "Natural wood finish"] 
        },
        { 
            "type": "Iron Bed", 
            "price": 8000, 
            "image": "", 
            "description": "Stylish iron bed with vintage appeal.", 
            "availability": "In stock", 
            "features": ["Durable", "Classic design"] 
        },
        { 
            "type": "Metal Bed", 
            "price": 8500, 
            "image": "", 
            "description": "Modern metal bed with sleek design and comfort.", 
            "availability": "In stock", 
            "features": ["Modern design", "Sturdy build"] 
        },
        { 
            "type": "Divan Bed with Cushion", 
            "price": 9000, 
            "image": "", 
            "description": "Divan bed with cushioned base for added comfort.", 
            "availability": "In stock", 
            "features": ["Comfortable", "Stylish design"] 
        },
        { 
            "type": "Maharashtrian Palkhi Bed", 
            "price": 14000, 
            "image": "", 
            "description": "Traditional Maharashtrian palkhi bed with intricate carvings.", 
            "availability": "In stock", 
            "features": ["Traditional craftsmanship", "Artistic design"] 
        },
        { 
            "type": "Jharokha Bed", 
            "price": 12000, 
            "image": "", 
            "description": "Jharokha-style bed inspired by traditional designs.", 
            "availability": "In stock", 
            "features": ["Traditional style", "Elegant design"] 
        },
        { 
            "type": "Choukat Bed", 
            "price": 11000, 
            "image": "", 
            "description": "Choukat bed with traditional Indian aesthetics.", 
            "availability": "In stock", 
            "features": ["Classic design", "Handcrafted details"] 
        },
        { 
            "type": "Mandir Bed", 
            "price": 13000, 
            "image": "", 
            "description": "Mandir-style bed with religious and traditional touches.", 
            "availability": "In stock", 
            "features": ["Religious symbolism", "Elegant design"] 
        },
        { 
            "type": "Warli Bed", 
            "price": 16000, 
            "image": "", 
            "description": "Warli-style bed with traditional tribal artwork.", 
            "availability": "Pre-order", 
            "features": ["Hand-painted artwork", "Artistic appeal"] 
        },
        { 
            "type": "Palki Bed", 
            "price": 18000, 
            "image": "", 
            "description": "Luxury palki bed with ornate details and premium craftsmanship.", 
            "availability": "In stock", 
            "features": ["Luxurious design", "Ornate details"] 
        },
        { 
            "type": "Konkan Bed", 
            "price": 12500, 
            "image": "", 
            "description": "Konkan-style bed with coastal aesthetic and robust build.", 
            "availability": "In stock", 
            "features": ["Coastal design", "Durable"] 
        },
        { 
            "type": "King Size", 
            "price": 10000, 
            "image": "", 
            "description": "Large king size bed for spacious bedrooms.", 
            "availability": "In stock", 
            "features": ["Spacious", "Comfortable"] 
        }
    ]
    
    },
    {
      "category": "table",
      "types":[
        { 
            "type": "Dining Table", 
            "price": 6000, 
            "image": "", 
            "description": "Spacious dining table with sturdy construction.", 
            "availability": "In stock", 
            "features": ["Durable", "Elegant design"] 
        },
        { 
            "type": "Dining Table", 
            "price": 5000, 
            "image": "", 
            "description": "Compact dining table ideal for smaller spaces.", 
            "availability": "Out of stock", 
            "features": ["Compact", "Functional"] 
        },
        { 
            "type": "Coffee Table", 
            "price": 5000, 
            "image": "", 
            "description": "Stylish coffee table perfect for living rooms.", 
            "availability": "In stock", 
            "features": ["Stylish", "Functional"] 
        },
        { 
            "type": "Study Table", 
            "price": 5000, 
            "image": "", 
            "description": "Practical study table with ample workspace.", 
            "availability": "In stock", 
            "features": ["Functional", "Spacious"] 
        },
        { 
            "type": "Work Desk", 
            "price": 5000, 
            "image": "", 
            "description": "Work desk designed for comfort and efficiency.", 
            "availability": "In stock", 
            "features": ["Ergonomic design", "Ample storage"] 
        },
        { 
            "type": "Console Table", 
            "price": 5000, 
            "image": "", 
            "description": "Elegant console table for display and storage.", 
            "availability": "In stock", 
            "features": ["Stylish", "Multi-functional"] 
        },
        { 
            "type": "Side Table", 
            "price": 5000, 
            "image": "", 
            "description": "Compact side table for bedside or living room use.", 
            "availability": "In stock", 
            "features": ["Compact", "Useful"] 
        },
        { 
            "type": "End Table", 
            "price": 5000, 
            "image": "", 
            "description": "Functional end table ideal for corners.", 
            "availability": "In stock", 
            "features": ["Compact", "Practical"] 
        },
        { 
            "type": "Center Table", 
            "price": 5000, 
            "image": "", 
            "description": "Center table for a stylish living room centerpiece.", 
            "availability": "Out of stock", 
            "features": ["Stylish", "Functional"] 
        },
        { 
            "type": "Console Table (Indian Style)", 
            "price": 5000, 
            "image": "", 
            "description": "Traditional Indian style console table with intricate details.", 
            "availability": "In stock", 
            "features": ["Traditional design", "Crafted details"] 
        },
        { 
            "type": "Wooden Dining Table", 
            "price": 5000, 
            "image": "", 
            "description": "Natural wooden dining table with classic appeal.", 
            "availability": "In stock", 
            "features": ["Classic design", "Durability"] 
        },
        { 
            "type": "Folding Table", 
            "price": 5000, 
            "image": "", 
            "description": "Portable folding table for space-saving use.", 
            "availability": "In stock", 
            "features": ["Portable", "Space-saving"] 
        },
        { 
            "type": "Picnic Table", 
            "price": 5000, 
            "image": "", 
            "description": "Outdoor picnic table ideal for gardens and parks.", 
            "availability": "In stock", 
            "features": ["Outdoor use", "Durable"] 
        },
        { 
            "type": "Bar Table", 
            "price": 5000, 
            "image": "", 
            "description": "Stylish bar table for social gatherings.", 
            "availability": "In stock", 
            "features": ["Stylish", "Functional"] 
        },
        { 
            "type": "Temple Table", 
            "price": 5000, 
            "image": "", 
            "description": "Pooja temple table for religious rituals and offerings.", 
            "availability": "In stock", 
            "features": ["Religious", "Decorative"] 
        },
        { 
            "type": "Pooja Table", 
            "price": 5000, 
            "image": "", 
            "description": "Traditional pooja table for spiritual needs.", 
            "availability": "In stock", 
            "features": ["Religious", "Elegant design"] 
        },
        { 
            "type": "Square Table", 
            "price": 5000, 
            "image": "", 
            "description": "Square table ideal for compact spaces.", 
            "availability": "In stock", 
            "features": ["Compact", "Functional"] 
        },
        { 
            "type": "Rectangular Table", 
            "price": 5000, 
            "image": "", 
            "description": "Rectangular table for dining and workspace.", 
            "availability": "In stock", 
            "features": ["Spacious", "Functional"] 
        },
        { 
            "type": "Round Table", 
            "price": 5000, 
            "image": "", 
            "description": "Round table for a cozy and inclusive setup.", 
            "availability": "In stock", 
            "features": ["Cozy", "Inclusive"] 
        },
        { 
            "type": "Coffee Table", 
            "price": 3000, 
            "image": "", 
            "description": "Compact coffee table ideal for smaller living spaces.", 
            "availability": "In stock", 
            "features": ["Compact", "Functional"] 
        }
    ]
    
    },
    {
      "category": "chair",
      "types":[
        { 
            "type": "Office Chair", 
            "price": 4000, 
            "image": "", 
            "description": "Comfortable office chair with adjustable height.", 
            "availability": "In stock", 
            "features": ["Adjustable height", "Comfortable"] 
        },
        { 
            "type": "Dining Chair", 
            "price": 2500, 
            "image": "", 
            "description": "Simple dining chair with a wooden frame.", 
            "availability": "Out of stock", 
            "features": ["Wooden frame", "Simple design"] 
        },
        { 
            "type": "Dining Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Stylish dining chair with cushioned seating.", 
            "availability": "In stock", 
            "features": ["Cushioned", "Stylish"] 
        },
        { 
            "type": "Office Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Ergonomic office chair with lumbar support.", 
            "availability": "In stock", 
            "features": ["Ergonomic", "Lumbar support"] 
        },
        { 
            "type": "Lounge Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Relaxing lounge chair for comfort and style.", 
            "availability": "In stock", 
            "features": ["Comfortable", "Stylish"] 
        },
        { 
            "type": "Armchair", 
            "price": 5000, 
            "image": "", 
            "description": "Classic armchair with cushioned seating.", 
            "availability": "In stock", 
            "features": ["Cushioned", "Classic design"] 
        },
        { 
            "type": "Recliner Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Recliner chair for ultimate relaxation.", 
            "availability": "In stock", 
            "features": ["Reclining function", "Comfortable"] 
        },
        { 
            "type": "Accent Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Stylish accent chair for modern interiors.", 
            "availability": "In stock", 
            "features": ["Stylish", "Decorative"] 
        },
        { 
            "type": "Rocking Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Rocking chair for a relaxed sitting experience.", 
            "availability": "In stock", 
            "features": ["Rocking function", "Comfortable"] 
        },
        { 
            "type": "Folding Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Portable folding chair for space-saving use.", 
            "availability": "In stock", 
            "features": ["Portable", "Space-saving"] 
        },
        { 
            "type": "Wooden Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Natural wooden chair with a minimalist design.", 
            "availability": "In stock", 
            "features": ["Wooden design", "Minimalist"] 
        },
        { 
            "type": "Maharashtrian Wooden Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Traditional Maharashtrian wooden chair with detailed craftsmanship.", 
            "availability": "In stock", 
            "features": ["Traditional design", "Detailed craftsmanship"] 
        },
        { 
            "type": "Traditional Indian Chair (Singhasan)", 
            "price": 5000, 
            "image": "", 
            "description": "Decorative traditional Indian chair with artistic designs.", 
            "availability": "In stock", 
            "features": ["Artistic designs", "Decorative"] 
        },
        { 
            "type": "Office Swivel Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Swivel office chair with mobility and comfort.", 
            "availability": "In stock", 
            "features": ["Swivel function", "Comfortable"] 
        },
        { 
            "type": "High Back Chair", 
            "price": 5000, 
            "image": "", 
            "description": "High back chair for better support and comfort.", 
            "availability": "In stock", 
            "features": ["High back", "Supportive"] 
        },
        { 
            "type": "Visitor Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Comfortable visitor chair for waiting areas.", 
            "availability": "In stock", 
            "features": ["Comfortable", "Stylish"] 
        },
        { 
            "type": "Bean Bag Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Flexible bean bag chair for casual seating.", 
            "availability": "In stock", 
            "features": ["Casual seating", "Flexible"] 
        },
        { 
            "type": "Bar Stool", 
            "price": 5000, 
            "image": "", 
            "description": "Stylish bar stool for kitchen or bar areas.", 
            "availability": "In stock", 
            "features": ["Stylish", "Functional"] 
        },
        { 
            "type": "Lounge Recliner Chair", 
            "price": 5000, 
            "image": "", 
            "description": "Comfortable lounge recliner with adjustable settings.", 
            "availability": "In stock", 
            "features": ["Adjustable", "Comfortable"] 
        },
        { 
            "type": "Dining Chair (Maharashtrian Style)", 
            "price": 5000, 
            "image": "", 
            "description": "Maharashtrian style dining chair with intricate carvings.", 
            "availability": "In stock", 
            "features": ["Intricate carvings", "Traditional"] 
        }
    ]
    
    }
  ];

  
  // Update price range display
  priceRange.addEventListener('input', function () {
    minPriceDisplay.textContent = priceRange.value;
    maxPriceDisplay.textContent = priceRange.max - priceRange.value;
  });

  // Function to update furniture types based on selected category
  furnitureCategory.addEventListener('change', function () {
    const selectedCategory = furnitureCategory.value;
    furnitureType.innerHTML = '<option value="">-- Select Type --</option>';

    if (selectedCategory) {
      furnitureTypeContainer.classList.remove('hidden');
      const types = furnitureData.find(item => item.category === selectedCategory)?.types || [];
      types.forEach(item => {
        const option = document.createElement('option');
        option.value = item.type;
        option.textContent = item.type;
        furnitureType.appendChild(option);
      });
    } else {
      furnitureTypeContainer.classList.add('hidden');
    }
  });

  // Apply filter button event listener
  applyFilterButton.addEventListener('click', function () {
    const selectedCategory = furnitureCategory.value;
    const selectedType = furnitureType.value;
    const minPrice = priceRange.value;
    const maxPrice = priceRange.max - minPrice;

    let filteredResults = furnitureData;

    if (selectedCategory) {
      filteredResults = filteredResults.find(item => item.category === selectedCategory)?.types || [];
    }
    if (selectedType) {
      filteredResults = filteredResults.filter(item => item.type === selectedType);
    }
    filteredResults = filteredResults.filter(item => item.price >= minPrice && item.price <= maxPrice);

    // Display results
    resultsList.innerHTML = '';
    if (filteredResults.length > 0) {
      filteredResults.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.type} - ₹${item.price}`;
        listItem.addEventListener('click', function () {
          displayDetails(item);
        });
        resultsList.appendChild(listItem);
      });
    } else {
      const noResults = document.createElement('li');
      noResults.textContent = 'No results found';
      resultsList.appendChild(noResults);
    }
  });

  // Function to display furniture details
  function displayDetails(item) {
    image.src = item.image;
    image.alt = item.type;
    description.textContent = item.description;
    availability.textContent = `Availability: ${item.availability}`;
    features.innerHTML = '';
    item.features.forEach(feature => {
      const featureItem = document.createElement('li');
      featureItem.textContent = feature;
      features.appendChild(featureItem);
    });
  }
});


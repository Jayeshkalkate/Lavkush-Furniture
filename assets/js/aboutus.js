// Optional: Add some animation effects to the hero text on load
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h2");
    const heroSubText = document.querySelector(".hero p");
  
    heroText.style.opacity = "0";
    heroSubText.style.opacity = "0";
  
    setTimeout(() => {
      heroText.style.transition = "opacity 1.5s ease-in";
      heroText.style.opacity = "1";
    }, 300);
  
    setTimeout(() => {
      heroSubText.style.transition = "opacity 1.5s ease-in";
      heroSubText.style.opacity = "1";
    }, 600);
  });
  
document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navbar ul");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
      });
    }
  
    // Default tab on load
    openTab("description");
  
    // Zoom effect for related products
    const zoomables = document.querySelectorAll(".zoomable");
    zoomables.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.add("zoomed");
        setTimeout(() => card.classList.remove("zoomed"), 300);
      });
    });
  
    // Thumbnail gallery click
    const thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach(img => {
      img.addEventListener("click", () => updateMainImage(img));
    });
  });
  
  // Function to update main image
  function updateMainImage(img) {
    const mainImage = document.getElementById("main-product-image");
    if (mainImage && img.src) {
      mainImage.src = img.src;
    }
  }
  
  // Function to switch tabbed content
  function openTab(tabId) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tabs button");
  
    contents.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));
  
    const tabContent = document.getElementById(tabId);
    const tabButton = document.querySelector(`.tabs button[onclick="openTab('${tabId}')"]`);
  
    if (tabContent) tabContent.classList.add("active");
    if (tabButton) tabButton.classList.add("active");
  }
  
  // Open Size Chart Modal
  function openSizeChart() {
    const modal = document.getElementById("size-chart-modal");
    if (modal) modal.style.display = "flex";
  }
  
  // Open Color Comparison Modal
  function openColorCompare() {
    const modal = document.getElementById("compare-modal");
    const container = document.getElementById("color-comparison");
  
    if (modal && container) {
      modal.style.display = "flex";
      container.innerHTML = `
        <div style="width:50px; height:50px; background:red; margin-right:10px;"></div>
        <div style="width:50px; height:50px; background:blue; margin-right:10px;"></div>
        <div style="width:50px; height:50px; background:green;"></div>
      `;
    }
  }
  
  // Close any modal
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }
  
  // Handle color swatch selection
  function selectColor(color) {
    alert("Selected Color: " + color);
  }
  
  // Add to cart functionality
  function addToCart() {
    const size = document.getElementById("size-select")?.value;
    if (size) {
      alert("Added T-Shirt (Size: " + size + ") to cart.");
    } else {
      alert("Please select a size.");
    }
  }
  
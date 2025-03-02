const categoryButtons = document.querySelectorAll(".category-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Set default active tab (ALL)
const defaultTab = document.querySelector('[data-category="all"]');
defaultTab.classList.add("text-gray-800", "border-b-2", "border-green-500");

// Ensure portfolio container always has a bottom border
const portfolioContainer = document.querySelector(".container");
portfolioContainer.classList.add("border-b-4", "border-green-500", "transition-all", "duration-300");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active styles from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("text-gray-800", "border-b-2", "border-green-500"));

    // Add active styles to the clicked button
    button.classList.add("text-gray-800", "border-b-2", "border-green-500");

    const category = button.getAttribute("data-category");

    // Show or hide portfolio items based on category
    portfolioItems.forEach((item) => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


// ---------------------------------------

const topBtn = document.getElementById("backToTop");
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

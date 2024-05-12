// Function to check if an element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Function to add animation class
function addAnimationClass() {
  var elements = document.querySelectorAll(".animated-element");
  elements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add(
        "animate__animated",
        "animate__fadeInUp",
        "animate__delay-0.5s"
      ); // Change fadeIn to your desired animation
    }
  });
}

// Add event listener for scroll
window.addEventListener("scroll", addAnimationClass);

// Initial check in case some elements are already in view when page loads
addAnimationClass();

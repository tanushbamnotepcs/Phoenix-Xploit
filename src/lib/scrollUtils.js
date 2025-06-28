/**
 * Smoothly scrolls to an element with the given ID using a custom easing function
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} duration - The duration of the animation in milliseconds
 * @param {number} offset - Optional offset from the top of the element in pixels
 */
export const smoothScrollTo = (elementId, duration = 1000, offset = 0) => {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(elementId);
  if (!element) return;
  
  // For handling direct jump to element from another page
  if (window.location.hash === `#${elementId}`) {
    setTimeout(() => {
      animateScroll(element, duration, offset);
    }, 100);
    return;
  }
  
  animateScroll(element, duration, offset);
};

/**
 * Performs the smooth scrolling animation with cubic bezier easing
 */
const animateScroll = (element, duration, offset) => {
  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  // Easing function - cubic bezier approximation of ease-in-out-cubic
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}; 
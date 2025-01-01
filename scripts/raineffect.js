let speed;
let drops;
let raindropContainer;
const color = "#1a2b32"; // Drop color
const raindrops = [];
let rainActive = false;
let rainPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Check if user prefers reduced motion
const mobileBreakpoint = 700; // Constant for mobile breakpoint

let resizeTimeout;
let rainToggleButton; // Removed redundant creation of button here

// Update animation settings based on screen size
function updateAnimationSettings() {
  const isMobile = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches;
  speed = 2;  // Overall speed multiplier (higher value for faster rain)
  drops = isMobile ? 50 : 150; // Number of drops for mobile vs desktop
}

// Button text update helper
function updateButtonText() {
  rainToggleButton.innerText = rainPaused ? "RESUME RAIN" : "PAUSE RAIN";
}

// Toggle rain button
function createToggleRainButton() {
  rainToggleButton = document.createElement("button"); // Create the button here
  rainToggleButton.id = "rainToggleButton";
  
  // Initialize button text based on rain state
  if (rainPaused) {
    rainToggleButton.innerText = "START RAIN EFFECT (ANIMATED)";
  } else {
    startRain(); // Call startRain if rain is not paused
    rainToggleButton.innerText = "PAUSE RAIN"; // Change button text to indicate pause
  }

  // Button click handler
  rainToggleButton.addEventListener("click", () => {
    rainPaused = !rainPaused; // Toggle the paused state
    updateButtonText(); // Update button text

    if (!rainPaused && !rainActive) {
      startRain();  // Start rain if it's not active
    }
  });

  document.body.appendChild(rainToggleButton); // Append button once
}

// Create a raindrop
function createRaindrop() {
  const drop = document.createElement("div");
  drop.style.position = "absolute";
  drop.style.height = "var(--raindrop-height)";
  drop.style.width = "var(--raindrop-width)";
  drop.style.backgroundColor = color;
  raindropContainer.appendChild(drop);

  return {
    element: drop,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speed: 8 + Math.random() * 12,
  };
}

// Update raindrops position
function updateRaindrops() {
  if (!rainPaused) {
    raindrops.forEach((drop) => {
      drop.y += drop.speed * speed; // Update position only if rain is active
      if (drop.y > window.innerHeight) {
        drop.y = -16; // Reset to top
        drop.x = Math.random() * window.innerWidth;
      }
      drop.element.style.transform = `translate(${drop.x}px, ${drop.y}px)`;
    });
  }
  requestAnimationFrame(updateRaindrops);
}

// Start the rain effect
function startRain() {
  if (rainActive) return; // Prevent multiple containers

  rainActive = true;

  raindropContainer = document.createElement("div");
  raindropContainer.id = "raindropContainer"; // Add the CSS class by ID
  document.body.appendChild(raindropContainer);
  
  // Create drops
  for (let i = 0; i < drops; i++) {
    raindrops.push(createRaindrop());
  }

  updateRaindrops();
}

// Stop the rain effect
function stopRain() {
  if (rainActive) {
    rainActive = false;
    raindrops.forEach((drop) => drop.element.remove());
    raindrops.length = 0; // Clear array directly
    raindropContainer.remove();
  }
}

// Visibility change handler to pause or resume rain
function visibilityChangeHandler() {
  rainPaused = document.hidden || rainPaused;
  updateButtonText(); // Update button text directly without needing the button reference
}

// Resize handler for responsive rain settings
function resizeHandler() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateAnimationSettings, 200); // Ensure debounce on resize
}

// Initialize the animation settings based on the current screen size
updateAnimationSettings();
document.addEventListener("DOMContentLoaded", createToggleRainButton); // Button created after DOM is ready

// Event listeners for resize and visibility change
window.addEventListener("resize", resizeHandler);
document.addEventListener("visibilitychange", visibilityChangeHandler);
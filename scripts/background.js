// <![CDATA[
  let speed;
  let drops;
  const color = "#1a2b32d9"; // Drop color
  const raindrops = [];

  function updateAnimationSettings() {
    // Check if the screen width is less than or equal to 700px (mobile)
    if (window.matchMedia("(max-width: 700px)").matches) {
      speed = 2;  // Overall speed multiplier (higher value for faster rain)
      drops = 50; // Number of drops for mobile
    } else {
      speed = 2;  // Same speed for desktop, or adjust as needed
      drops = 150; // Number of drops for desktop
    }
  }

  // Initialize the animation settings based on the current screen size
  updateAnimationSettings();

  let rainActive = false;
  let rainPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Check if user prefers reduced motion

  // Toggle rain button
  function createToggleRainButton() {
    const button = document.createElement("button");
    if (rainPaused) {
      button.innerText = "START RAIN EFFECT (ANIMATED)";
    } else {
      startRain();
      button.innerText = "PAUSE RAIN"; // Change button text to indicate pause
    }

    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.right = "10px";
    button.style.zIndex = "10"; // Ensure it's above the rain effect
    button.style.padding = "5px 5px";
    button.style.backgroundColor = "#1a2b32";
    button.style.color = "#fff";
    button.style.fontFamily = "'Tomorrow', sans-serif";
    button.style.fontWeight = "bold";
    button.style.border = "none";
    button.style.cursor = "pointer";
    
    button.addEventListener("click", () => {
      
      rainPaused = !rainPaused; // Toggle the paused state
      
      if (rainPaused)
      {
        button.innerText = "RESUME RAIN"; // Change button text to indicate resume
      }
      else
      {
        button.innerText = "PAUSE RAIN"; // Change button text to indicate pause
        
        if(!rainActive)
        {
          startRain()
        }
      }
    });
    
    document.body.appendChild(button);
  }

  function createRaindrop() {
    
    const drop = document.createElement("div");
    drop.style.position = "absolute";
    drop.style.height = "16px";
    drop.style.width = "2px";
    drop.style.backgroundColor = color;
    raindropContainer.appendChild(drop);
    return {
      element: drop,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 8 + Math.random() * 12, // Much faster raindrops
    };
  }
  
  // Update raindrops based on whether rain is paused
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
  function startRain()
  {
    // Create the raindrop container
    rainActive = true;
    raindropContainer = document.createElement("div");
    raindropContainer.style.position = "fixed";
    raindropContainer.style.top = "0";
    raindropContainer.style.left = "0";
    raindropContainer.style.width = "100%";
    raindropContainer.style.height = "100%";
    raindropContainer.style.overflow = "hidden";
    raindropContainer.style.zIndex = "-1"; // Ensure it is behind content
    raindropContainer.style.pointerEvents = "none"; // Allow clicks through the container
    document.body.appendChild(raindropContainer);
    
    for (let i = 0; i < drops; i++)
    {
      raindrops.push(createRaindrop());
    }
    
    updateRaindrops();
  }
  
  window.onload = createToggleRainButton;
// ]]>
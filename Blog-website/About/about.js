// Add this at the top of scripts.js if it's not already there
const eyes = document.querySelectorAll('.eye1, .eye2, .eye3, .eye4, .eye5, .eye6, .eye7');

// Add an event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  // Get the mouse position relative to the viewport
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Loop through each eye to update its pupil's position
  eyes.forEach(eye => {
    // Get the eye's bounding box and center coordinates
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // Calculate the angle between the cursor and the eye center
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    // Set the movement range for the pupils
    const maxMovement = 10; // Adjust this for smaller or larger movement

    // Calculate the pupil's offset
    const offsetX = Math.cos(angle) * maxMovement;
    const offsetY = Math.sin(angle) * maxMovement;

    // Update the pupil's position
    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
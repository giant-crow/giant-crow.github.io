document.addEventListener('DOMContentLoaded', () => {
    const underConstruction = document.getElementById('ucStripedBackground');
    const chainFence = document.getElementById('chainFence');

    function updateFencePosition() {
      const underConstruction = document.getElementById('ucStripedBackground');
      const chainFence = document.getElementById('chainFence');

      if (underConstruction && chainFence) {
        const rect = underConstruction.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate the top and height
        const fenceTop = Math.max(0, rect.top - 100); // 100px above the #ucStripedBackground element
        const fenceHeight = viewportHeight - fenceTop;

        // Update the position and size of the #chainFence div
        chainFence.style.top = `${fenceTop}px`;
        chainFence.style.height = `${fenceHeight}px`;

        // Update the posts
        const posts = document.querySelectorAll('.fencePost');
        posts.forEach(post => {
            post.style.height = `${fenceHeight}px`;
        });
      }
    }

    // Update on load and resize
    updateFencePosition();
    window.addEventListener('resize', updateFencePosition);
});
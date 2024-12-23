// <![CDATA[

document.addEventListener('DOMContentLoaded', () => {
    const underConstruction = document.getElementById('underconstruction');
    const chainFence = document.getElementById('chain-fence');

    function updateFencePosition() {
      const underConstruction = document.getElementById('underconstruction');
      const chainFence = document.getElementById('chain-fence');

      if (underConstruction && chainFence) {
        const rect = underConstruction.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate the top and height
        const fenceTop = Math.max(0, rect.top - 100); // 100px above the #underconstruction element
        const fenceHeight = viewportHeight - fenceTop;

        // Update the position and size of the #chain-fence div
        chainFence.style.top = `${fenceTop}px`;
        chainFence.style.height = `${fenceHeight}px`;

        // Update the posts
        const posts = document.querySelectorAll('.fence-post');
        posts.forEach(post => {
            post.style.height = `${fenceHeight}px`;
        });
      }
    }

    // Update on load and resize
    updateFencePosition();
    window.addEventListener('resize', updateFencePosition);
});

// ]]>
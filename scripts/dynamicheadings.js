document.addEventListener('DOMContentLoaded', () => {
    // List of options
    const options = [
        "GIANT CROWS AT WORK",
        "COME BACK LATER, MAYBE?",
        "I SWEAR I'M WORKING ON IT",
        "DONE WHEN IT'S DONE",
        "NO ENTRY",
        "UNDER CONSTRUCTION"
    ];

    // Select a random option
    const randomText = options[Math.floor(Math.random() * options.length)];

    // Update the heading
    const h1Element = document.querySelector('#ucDynamicHeading');
    if (h1Element) {
        h1Element.innerText = randomText;
    }
});
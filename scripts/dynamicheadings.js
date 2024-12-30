// <![CDATA[

    // SILLY HEADING

    document.addEventListener('DOMContentLoaded', () => {
        // List of options
        const options = [
            "GIANT CROWS AT WORK",
            "COME BACK LATER, MAYBE",
            "I SWEAR I'M WORKING ON IT",
            "5-MINUTE CODING ADVENTURE",
            "BRB",
            "DONE WHEN IT'S DONE",
            "[LOUD HOLD MUSIC]",
        ];
  
        // Select a random option
        const randomText = options[Math.floor(Math.random() * options.length)];
  
        // Update the heading
        const h1Element = document.querySelector('#dynamic-heading');
        if (h1Element) {
            h1Element.innerText = randomText;
        }
    });

    // WEBRING LINK

    document.addEventListener('DOMContentLoaded', () => {
        // List of options with the links
        const options = [
            { name: "silas", url: "https://prophetesque.gay" },
            { name: "wren", url: "https://littlebird.sh" },
            { name: "barquq", url: "https://taniyn.quest" },
            { name: "binary", url: "https://binarystar.games" },
            { name: "minty", url: "https://mintywyvern.neocities.org" },
            { name: "melodica", url: "https://melodiccharm.neocities.org" },
            { name: "shark", url: "https://sharkaeopteryx.neocities.org" },
            { name: "renkon", url: "https://renkotsuban.com" },
            { name: "maja", url: "https://abstractcactus.art" },
            { name: "jama", url: "https://jama.neocities.org" },
            { name: "kay", url: "https://lilbunny.nekoweb.org" }
        ];

        // Select a random option
        const randomLink = options[Math.floor(Math.random() * options.length)];

        // Function to create link with hover effects
        function createLink(text, url) {
            const link = document.createElement('a');
            link.href = url;
            link.innerText = text;
            link.classList.add('webring-link'); // Add a class for styling
            return link;
        }

        // Update the link
        const h1Element = document.querySelector('#ucDynamicLink');
        if (h1Element) {
            const link = createLink(randomLink.name, randomLink.url);
            h1Element.innerHTML = ''; // Clear previous content
            h1Element.appendChild(link);
        }
    });

// ]]>
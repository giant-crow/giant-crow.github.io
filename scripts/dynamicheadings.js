// <![CDATA[

    // SILLY HEADING

    document.addEventListener('DOMContentLoaded', () => {
        // List of options
        const options = [
            "GIANT CROWS AT WORK",
            "COME BACK LATER, MAYBE",
            "I SWEAR I'M WORKING ON IT",
            "QUICK FIVE MINUTE CODING ADVENTURE",
            "BRB",
            "IT'LL BE DONE WHEN IT'S DONE",
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
        // List of options
        const options = [
            "<a href='http://prophetesque.gay' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>silas</a>",
            "<a href='http://littlebird.sh' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>wren</a>",
            "<a href='http://taniyn.quest' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>barquq</a>",
            "<a href='http://binarystar.games' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>binary</a>",
            "<a href='http://mintywyvern.neocities.org' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>minty</a>",
            "<a href='http://melodiccharm.neocities.org' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>melodica</a>",
            "<a href='http://sharkaeopteryx.neocities.org' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>shark</a>",
            "<a href='http://renkotsuban.com' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>renkon</a>",
            "<a href='http://abstractcactus.art' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>maja</a>",
            "<a href='http://jama.neocities.org' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>jama</a>",
            "<a href='http://lilbunny.nekoweb.org' style='color: rgba(246, 204, 14, 0.7); text-decoration: none; transition: color 0.3s ease;' onmouseover='this.style.color='rgba(246, 204, 14, 1)';' onmouseout='this.style.color='rgba(246, 204, 14, 0.7)';'>kay</a>",
        ];

        // Select a random option
        const randomText = options[Math.floor(Math.random() * options.length)];

        // Update the link
        const h1Element = document.querySelector('#dynamic-link');
        if (h1Element) {
            h1Element.innerHTML = randomText;
        }
    });

// ]]>
// jScript.js

document.addEventListener("DOMContentLoaded", function () {
    fetch('sounds.json')
        .then(response => response.json())
        .then(sounds => {
            const categories = Object.keys(sounds);

            // Create the tabs and the tab content container
            const tabsContainer = document.getElementById("tabs-container");
            const soundsContainer = document.getElementById("sounds-container");
            categories.forEach((category, index) => {
                const tab = document.createElement("div");
                tab.classList.add("tab");
                tab.textContent = formatName(category);
                tab.onclick = function () {
                    selectCategory(category);
                    tab.classList.add("tab-animation");
                    setTimeout(() => {
                        tab.classList.remove("tab-animation");
                    }, 500);
                };
                tabsContainer.appendChild(tab);

                if (index === 0) {
                    selectCategory(category);
                }
            });

            function selectCategory(category) {
                // Set the active tab
                const tabs = document.querySelectorAll(".tab");
                tabs.forEach((tab) => {
                    tab.classList.remove("tab-active");
                    if (tab.textContent === category) {
                        tab.classList.add("tab-active");
                    }
                });

                // Populate the sounds container
                soundsContainer.innerHTML = "";
                sounds[category].forEach((soundFile, index) => {
                    const soundName = soundFile.split('.')[0];

                    const soundItem = document.createElement("div");
                    soundItem.classList.add("sound-item");

                    const soundLabel = document.createElement("div");
                    soundLabel.classList.add("sound-name");
                    soundLabel.textContent = formatName(soundName);
                    soundItem.appendChild(soundLabel);

                    const slider = document.createElement("input");
                    slider.type = "range";
                    slider.min = "0";
                    slider.max = "100";
                    slider.value = "0";
                    slider.classList.add("slider");
                    soundItem.appendChild(slider);
                    
                    // Create the volume indicator
                    const volumeIndicator = document.createElement("span");
                    volumeIndicator.classList.add("volume-indicator");
                    volumeIndicator.textContent = `Volume: ${slider.value}`;
                    soundItem.appendChild(volumeIndicator);

                    const howl = new Howl({
                        src: [`sounds/${category}/${soundFile}`],
                        loop: category !== "button",
                        onloaderror: function (id, message) {
                            console.error(`Load Error for ${soundName}: ${message}`);
                        },
                        onplayerror: function (id, message) {
                            console.error(`Play Error for ${soundName}: ${message}`);
                        },
                    });

                    slider.oninput = function () {
                        const currentPosition = howl.seek(); // Save the current position
                        howl.pause(); // Stop the sound

                        howl.volume(slider.value / 100); // Update the volume

                        howl.seek(currentPosition); // Set the position to the saved position
                        console.log(category !== "button")
                        if (slider.value > 0 && category !== "button") {
                            howl.play(); // Play the sound
                            console.log('Now Playing:', soundName);
                        }

                        volumeIndicator.textContent = `Volume: ${slider.value}`; // Update the volume indicator text
                    };
                    
                    if (category === "button") {
                        const playButton = document.createElement("button");
                        playButton.textContent = "Play";
                        playButton.classList.add("play-button");
                        playButton.onclick = function () {
                            howl.play();
                            console.log('Now Playing:', soundName);
                        };
                        soundItem.appendChild(playButton);
                    }

                    soundsContainer.appendChild(soundItem);

                    // Stagger the animation
                    setTimeout(() => {
                        soundItem.style.animationDelay = `${index * 100}ms`;
                        soundItem.classList.add("sound-item");
                    }, 0);
                });
            }
        });
});

function formatName(name) {
    return name
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

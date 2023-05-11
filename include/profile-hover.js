function profileHover() {
    const parentDivs = document.querySelectorAll('[id^="playlist-profile"], [id^="pinned-playlist-profile"]');


    parentDivs.forEach((parentDiv) => {
    const childDiv = parentDiv.querySelector('[id^="play-btn"]');

    parentDiv.addEventListener("mouseenter", () => {
        childDiv.classList.add("opacity-100");
    });

    parentDiv.addEventListener("mouseleave", () => {
        childDiv.classList.remove("opacity-100");
    });
    });
}

profileHover();
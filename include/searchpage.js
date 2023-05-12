function byThree() {
  const divs = document.querySelectorAll('[id^="playlist-profile"]');

  for (let i = 0; i < divs.length; i++) {
    if ((i + 1) % 3 === 0) {
      divs[i].classList.remove("sm:mr-2.5");
    }
  }
}

byThree();
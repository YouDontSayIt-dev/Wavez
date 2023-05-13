function byThree() {
  const divs = document.querySelectorAll('[id^="playlist-profile"]');
  const categ = document.querySelectorAll('[id^="playlist-categ"]');


  for (let i = 0; i < divs.length; i++) {
    if ((i + 1) % 3 === 0) {
      divs[i].classList.remove("sm:mr-2.5");
    }
  }

  for (let i = 0; i < categ.length; i++) {
    if ((i + 1) % 3 === 0) {
      categ[i].classList.remove("sm:mr-2.5");
    }
  }
}

byThree();
function initDropdown() {
    document.addEventListener('click', function (event) {
      // If the clicked element is not the dropdown button or menu items, hide the menu
      if (!event.target.closest('.dropdown')) {
        let dropdowns = document.querySelectorAll('.dropdown ul')
        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.add('hidden')
        }
      }
    })

    let dropdownBtn = document.querySelector('.dropdown button')
    let dropdownMenu = document.querySelector('.dropdown ul')

    dropdownBtn.addEventListener('click', function () {
      // Toggle the 'hidden' class to show or hide the menu
      dropdownMenu.classList.toggle('hidden')
    })
  }

  // Call the function to initialize the dropdown
  initDropdown();
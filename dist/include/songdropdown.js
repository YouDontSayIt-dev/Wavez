class songdropdown extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
            <div class="lg:ml-3 dropdown relative">
                <button class="ellipsis-button hidden lg:group-hover:block">
                    <i class="fas fa-ellipsis-h option"></i>
                </button>
                <div class="flex-col absolute bg-webheffect -left-24 w-32 px-5 py-2 rounded-lg text-custom-color-song-font text-xs hidden" style="z-index: 1;">
                    <a href="" class="py-2 mb-1 border-b-1">Add to Queue</a>
                    <a href="song.html" class="py-1">Go to songs</a>
                    <a href="artistpage.html" class="py-1">Go to artist</a>
                    <a href="song.html" class="py-1">Go to album</a>
                    <a href="addplaylist.html" class="py-2 mt-1 border-t-1">Add to playlist</a>                          
                </div>
            </div>
        `;
    }
}

customElements.define('songdropdown-component', songdropdown);
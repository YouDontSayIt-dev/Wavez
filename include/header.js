class header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header class = "bg-custom-color font-alata sticky">
        <div class ="flex h-[147px] items-center justify-end">
            <div class="w-auto h-auto my-1 mr-auto flex items-center ">
                <img class ="w-[80px] h-[auto] pl-5 md:w-[40%]" src="/assets/wavesLogo.png">
                <div class ="text-white px-2 py-2 tracking-[0.18rem] text-[24px] leading-[53px] md:text-[36px]">WAVES</div>
            </div>
            <div>
            <h1 class="hidden px-6 py-4 text-white font-[19px] leading-[26px] md:block">Login</h1>
            </div>
            <div>
            <h1 class="hidden px-6 py-4 text-white font-[19px] leading-[26px] md:block">Sign Up</h1>
            </div>
            <div class = "px-8 py-4 text-black font-[16px] leading-[26px]">
                <button class="hidden bg-custom-color-sidebar-brown rounded-full py-2 px-4 font-bold md:block">KNOW MORE</button>
                
            </div>
            <div class="pr-5 space-y-2 mr-2 md:hidden">
                        <div class="w-8 h-0.5 bg-white"></div>
                        <div class="w-8 h-0.5 bg-white"></div>
                        <div class="w-8 h-0.5 bg-white"></div>
                      </div>
                     
        </div>

    </header>
        `;
    }
}

customElements.define('header-component', header);
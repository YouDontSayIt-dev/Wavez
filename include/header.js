class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header class = "bg-custom-color font-alata sticky">
        <div class ="flex h-[147px] items-center justify-end">
            <div class="w-[150px] mr-auto flex items-center">
                <img class =" px-8 py-4 " src="/assets/wavesLogo.png">
                <div class="text-white px-4 py-4 tracking-[0.18rem] text-[44px] leading-[53px] ">WAVES</div>
            </div>
            <div class="px-6 py-4 text-white font-[19px] leading-[26px]">Login</div>
            <div class="px-6 py-4 text-white font-[19px] leading-[26px]">Sign Up</div>
            <div class = "px-8 py-4 text-black font-[19px] leading-[26px]">
                <button class="bg-custom-color-sidebar-brown rounded-full py-2 px-4 font-bold">GET STARTED</button>
            </div>
                     
        </div>

    </header>
        `;
    }
}

customElements.define('header-component', Header);

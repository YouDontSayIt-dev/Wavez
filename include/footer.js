class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer class="bg-custom-color font-alata">
        <div class ="flex max-w-[270px] my-auto mx-auto items-center">
            <div class = "grid grid-cols-4 gap-x-[150px]">
                <div class="mb-5 text-white font-[19px] leading-[26px]">
                    <h4 class="">Company</h4>
                    <ul>
                        <li class="text-gray-600">About</li>
                        <li class="text-gray-600">Jobs</li>
                        <li class="text-gray-600">For The Record</li>
                    </ul>
                </div>
                <div class="mb-5 text-white font-[19px] leading-[26px]">
                    <h4 class="">Communities</h4>
                    <ul>
                        <li class="text-gray-600">Developers</li>
                        <li class="text-gray-600">Advertising</li>
                        <li class="text-gray-600">Investors</li>
                    </ul>
                </div>
                <div class="mb-5 text-white font-[19px] leading-[26px]">
                    <h4 class="">Useful Links</h4>
                    <ul>
                        <li class="text-gray-600">Support</li>
                        <li class="text-gray-600">Legal</li>
                        <li class="text-gray-600">Privacy</li>
                        <li class="text-gray-600">Cookies</li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
        `;
    }        
}

customElements.define('footer-component', Footer);
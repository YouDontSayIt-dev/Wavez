class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
    <header>
        <div class = header>
            <h1 class = "Logo-name">WAVEZ</h1>
                <p class = "Header-login">Login</p>
                <p class = "Header-sign_up">Sign Up</p>
                    <button class = "Header-btn">Get Started</button>
                    <img class = "Logo" src = "assets/wavesLogo.png" alt = "Logo">
        </div>
    </header>
        `;
    }
}

customElements.define('header-component', Header);

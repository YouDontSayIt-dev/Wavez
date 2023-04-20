class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class = header>
        <h1 class = "logo-name">WAVEZ</h1>
        <p class = "Header-login">Login</p>
        <p class = "Header-sign_up">Sign Up</p>
        <button class = "Header-button">Get Started</button>
    </div>
        `;
    }
}

customElements.define('header-component', Header);

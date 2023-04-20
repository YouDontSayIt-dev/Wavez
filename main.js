class webHeader extends HTMLElement{
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

customElements.define('web-header', webHeader);


class webFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <h1>Web Footer</h1>
        `;
    }
}

customElements.define('web-footer', webFooter);
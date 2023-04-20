class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
            <h1>THIS IS A TEST FOOTER</h1>
        `;
    }
}

customElements.define('footer-component', Footer);
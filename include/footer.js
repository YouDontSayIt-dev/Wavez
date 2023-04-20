class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
    <footer>
    <div class = "footer">
    <p1 class = "Footer-Co_txt">Company</p1>
    </div>
    </footer>
        `;
    }        
}

customElements.define('footer-component', Footer);
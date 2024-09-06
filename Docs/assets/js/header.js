class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Header -->
            <header id="header">
                <a href="/index.html" class="logo">Moonlit Night Studios</a>
                <a href="/Docs/index.html" class="logo"><strong>Documentation</strong></a>
                <ul class="icons">
                    <li><a href="https://x.com/MoonlitNight_s" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                </ul>
            </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
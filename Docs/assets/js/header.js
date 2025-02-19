class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Header -->
            <header id="header">
                <a href="/index.html" class="logo">Moonlit Night Studios</a>
                <h2 align=center> Site is WIP! </h2>
                <ul class="icons">
                    <li><a href="https://x.com/MoonlitNight_s" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="https://github.com/moonlitnightstudios" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
						        <li><a href="mailto:moolitnightstudios@gmail.com" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
                </ul>
            </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
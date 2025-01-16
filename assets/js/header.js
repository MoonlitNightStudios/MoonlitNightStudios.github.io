class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Header -->
				<header id="header">
					<h1 id="logo"><a href="/index.html">Moonlit Night Studios</a></h1>
					<h2 align=center> Site is WIP! </h2>
					<nav id="nav">
						<ul>
							<li><a href="/index.html">Home</a></li>
							<li><a href="/Games/index.html">Games</a></li>
							<li>
								<a href="#">UE Plugins</a>
								<ul>
									<li><a href="/Plugins/quest-system.html">Quest System</a></li>
								</ul>
							</li>
							<li><a href="/Docs/index.html">Docs</a></li>
						</ul>
					</nav>
				</header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
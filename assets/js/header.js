class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Header -->
				<header id="header">
					<h1 id="logo"><a href="/index.html">Moonlit Night Studios</a></h1>
					<nav id="nav">
						<ul>
							<li><a href="/index.html">Home</a></li>
							<li>
								<a href="/Games/index.html">Games</a>
								<ul>
									<li><a href="/Games/tyrant.html">Project Tyrant</a></li>
									<!--li><a href="/Games/watcher.html">Project Watcher</a></li-->
								</ul>
							</li>
							<li>
								<a href="#">UE Plugins</a>
								<ul>
									<li><a href="/Plugins/quest-system.html">Quest System</a></li>
								</ul>
							</li>
							<li>
								<a href="#">Team</a>
								<ul>
									<li><a href="/Teams/Srinath/index.html">Srinath</a></li>
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
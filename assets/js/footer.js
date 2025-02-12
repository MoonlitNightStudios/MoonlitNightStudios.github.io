class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
			<!-- Footer -->
				<footer id="footer">
					<ul class="icons">
						<li><a href="https://x.com/MoonlitNight_s" target="_blank" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="https://www.linkedin.com/in/vryzl/" target="_blank" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
						<li><a href="https://github.com/moonlitnightstudios" target="_blank" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
						<li><a href="mailto:moolitnightstudios@gmail.com" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; 2024 Moonlit Night Studios Ltd. All rights reserved.</li>
					</ul>
				</footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
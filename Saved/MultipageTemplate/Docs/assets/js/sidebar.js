class Sidebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Sidebar -->
					<div id="sidebar">
						<div class="inner">

							<!-- Search -->
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>

							<!-- Menu -->
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="index.html">Homepage</a></li>
										<li><a href="elements.html">Elements</a></li>
										<li>
											<span class="opener">Quest System Plugin</span>
											<ul>
												<li><a href="/Docs/QuestSystemPlugin/getting-started.html">Getting started</a></li>
												<li><a href="#">Architecture</a></li>
												<li><a href="#">Using the plugin</a></li>
												<li><a href="#">Extending the plugin</a></li>
												<li><a href="#">API documentation</a></li>
											</ul>
										</li>
									</ul>
								</nav>

							<!-- Section -->
								<section>
									<header class="major">
										<h2>Marketplace</h2>
									</header>
									<div class="mini-posts">
										<article>
											<a href="#" class="image"><img src="/Docs/images/pic07.jpg" alt="" /></a>
											<p>Quest System Plugin - Available in the marketplace.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="/Docs/images/pic08.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="/Docs/images/pic09.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
									</div>
									<ul class="actions">
										<li><a href="#" class="button">More</a></li>
									</ul>
								</section>

							<!-- Footer -->
								<footer id="footer">
									<p class="copyright">&copy; 2024 Moonlit Night Studios Ltd. All rights reserved.</p>
								</footer>

						</div>
					</div>
      `;
    }
  }
  
  customElements.define('sidebar-component', Sidebar);
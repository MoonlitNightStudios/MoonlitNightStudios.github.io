class Sidebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Sidebar -->
					<div id="sidebar">
						<div class="inner">

							<!-- Search >
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section-->

							<!-- Menu -->
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/Docs/index.html">Homepage</a></li>
										<li><a href="/Docs/elements.html">Elements</a></li>
										<li>
											<span class="opener">Quest System Plugin</span>
											<ul>
												<li><a href="/Docs/QuestSystemPlugin/getting-started.html">Getting started</a></li>
												<li><a href="/Docs/QuestSystemPlugin/architecture.html">Architecture</a></li>
												<li>
													<span class="opener">Using the Plugin</span>
													<ul>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/your-first-quest.html">Creating a simple quest</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/your-first-dialogue.html">Creating dialogues</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/an-intro-to-notebooks.html">An intro to Notebooks</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/an-intro-to-services.html">An intro to Services</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/quest-tracking.html">Quest tracking</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/saving-and-loading-quests.html">Saving and loading quests</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/property-bindings.html">Property bindings</a></li>
														<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/quest-replication.html">Quest replication</a></li>
														<li>
															<span class="opener">Advanced</span>
															<ul>
																<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/events-triggers.html">Events and Triggers</a></li>
																<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/subgraphs.html">Subgraphs</a></li>
																<li><a href="/Docs/QuestSystemPlugin/UsingThePlugin/asset-instances-references.html">Asset instances and Asset references</a></li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<span class="opener">Extending the Plugin</span>
													<ul>
														<li><a href="/Docs/QuestSystemPlugin/ExtendingThePlugin/custom-action.html">Writing custom action types</a></li>
														<li><a href="/Docs/QuestSystemPlugin/ExtendingThePlugin/custom-dialogue-entity.html">Writing custom dialogue entities</a></li>
														<li><a href="/Docs/QuestSystemPlugin/ExtendingThePlugin/custom-dialogue-participant.html">Writing custom dialogue participant types</a></li>
														<li><a href="/Docs/QuestSystemPlugin/ExtendingThePlugin/custom-dialogue-fragment.html">Writing custom dialogue fragments</a></li>
													</ul>
												</li>
												<li><a href="/Docs/QuestSystemPlugin/api-documentation.html">API documentation</a></li>
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
											<p>Quest System Plugin - Coming soon!</p>
										</article>
									</div>
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
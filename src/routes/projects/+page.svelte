<div class="projects-container">
	<div class="projects-header">
		<h1>Mes Projets</h1>
		<p>Découvrez les projets sur lesquels j'ai travaillé</p>
	</div>

	<div class="projects">
		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/0066cc/ffffff?text=Portfolio" alt="Portfolio Web" />
			</div>
			<div class="project-content">
				<h3>Portfolio Web Moderne</h3>
				<p>Un portfolio personnel complet showcasant mes projets et compétences développé avec les dernières technologies web.</p>
				<div class="tags">
					<span class="tag">Svelte</span>
					<span class="tag">SvelteKit</span>
					<span class="tag">TypeScript</span>
				</div>
				<a href="/projects/test" class="project-link">Voir le détail →</a>
			</div>
		</article>

		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/00a86b/ffffff?text=App+IoT" alt="Application IoT" />
			</div>
			<div class="project-content">
				<h3>Application IoT</h3>
				<p>Système de gestion des objets connectés avec dashboard de monitoring en temps réel et API REST.</p>
				<div class="tags">
					<span class="tag">Node.js</span>
					<span class="tag">React</span>
					<span class="tag">MongoDB</span>
				</div>
				<a href="#" class="project-link">Voir le détail →</a>
			</div>
		</article>

		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Cybersec+Tool" alt="Outil Cybersécurité" />
			</div>
			<div class="project-content">
				<h3>Outil de Cybersécurité</h3>
				<p>Utilitaire de test de sécurité avec interface web pour scanner les vulnérabilités web.</p>
				<div class="tags">
					<span class="tag">Python</span>
					<span class="tag">Vue.js</span>
					<span class="tag">Flask</span>
				</div>
				<a href="#" class="project-link">Voir le détail →</a>
			</div>
		</article>

		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/ffa500/ffffff?text=E-Commerce" alt="Plateforme E-commerce" />
			</div>
			<div class="project-content">
				<h3>Plateforme E-commerce</h3>
				<p>Site e-commerce complet avec panier, paiement et gestion des commandes.</p>
				<div class="tags">
					<span class="tag">React</span>
					<span class="tag">Express</span>
					<span class="tag">PostgreSQL</span>
				</div>
				<a href="#" class="project-link">Voir le détail →</a>
			</div>
		</article>

		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/9b59b6/ffffff?text=Mobile+App" alt="Application Mobile" />
			</div>
			<div class="project-content">
				<h3>Application Mobile</h3>
				<p>Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.</p>
				<div class="tags">
					<span class="tag">React Native</span>
					<span class="tag">Firebase</span>
					<span class="tag">JavaScript</span>
				</div>
				<a href="#" class="project-link">Voir le détail →</a>
			</div>
		</article>

		<article class="project">
			<div class="project-image">
				<img src="https://via.placeholder.com/400x250/00bcd4/ffffff?text=Chat+App" alt="Application Chat" />
			</div>
			<div class="project-content">
				<h3>Application Chat Temps Réel</h3>
				<p>Plateforme de messagerie instantanée avec WebSocket pour la communication en temps réel.</p>
				<div class="tags">
					<span class="tag">Socket.io</span>
					<span class="tag">Node.js</span>
					<span class="tag">React</span>
				</div>
				<a href="#" class="project-link">Voir le détail →</a>
			</div>
		</article>
	</div>
</div>

<style>
	:root {
		--primary: #0066cc;
		--primary-light: #e6f0ff;
		--text-primary: #333;
		--text-secondary: #555;
		--text-muted: #666;
		--bg-light: #f8f9fa;
		--bg-card: #f9f9f9;
		--border-color: #e0e0e0;
	}

	:global(.dark-mode) {
		--primary: #4da6ff;
		--primary-light: #1a3d66;
		--text-primary: #e0e0e0;
		--text-secondary: #b0b0b0;
		--text-muted: #999;
		--bg-light: #1a1a1a;
		--bg-card: #2a2a2a;
		--border-color: #444;
	}

	.projects-container {
		width: 100%;
	}

	.projects-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.projects-header h1 {
		font-size: 2.5rem;
		color: var(--primary);
		margin: 0 0 0.5rem 0;
	}

	.projects-header p {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.project {
		background: var(--bg-card);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project:hover {
		transform: translateY(-8px);
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
	}

	:global(.dark-mode) .project:hover {
		box-shadow: 0 4px 12px rgba(77, 166, 255, 0.15);
	}

	.project-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
		background: var(--border-color);
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project:hover .project-image img {
		transform: scale(1.05);
	}

	.project-content {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.project h3 {
		color: var(--primary);
		margin: 0 0 0.75rem 0;
		font-size: 1.2rem;
	}

	.project p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 1rem 0;
		flex: 1;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tag {
		background: var(--primary-light);
		color: var(--primary);
		padding: 0.35rem 0.85rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid var(--primary);
	}

	.project-link {
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		align-self: flex-start;
	}

	.project-link:hover {
		gap: 0.75rem;
		color: #004a99;
	}

	@media (max-width: 768px) {
		.projects {
			grid-template-columns: 1fr;
		}

		.projects-header h1 {
			font-size: 1.8rem;
		}
	}
</style>

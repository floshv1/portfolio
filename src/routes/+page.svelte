<div class="hero">
	<div class="hero-content">
		<h1>Florian Cazac</h1>
		<p class="subtitle">Développeur Web & Étudiant en Cybersécurité</p>
		<p class="description">Bienvenue sur mon portfolio ! Je suis passionné par la création d'applications web modernes et la sécurité informatique.</p>
		<div class="cta-buttons">
			<a href="/profile" class="btn btn-primary">Voir mon profil</a>
			<a href="/projects" class="btn btn-secondary">Découvrir mes projets</a>
		</div>
	</div>
</div>

<section class="highlights">
	<h2>Mes domaines</h2>
	<div class="cards">
		<div class="card">
			<div class="icon">🌐</div>
			<h3>Développement Web</h3>
			<p>Création de sites et applications web modernes avec Svelte, React et TypeScript.</p>
		</div>
		<div class="card">
			<div class="icon">🔐</div>
			<h3>Cybersécurité</h3>
			<p>Passionné par la sécurité informatique et la protection des données.</p>
		</div>
		<div class="card">
			<div class="icon">🔌</div>
			<h3>Objets Connectés</h3>
			<p>Développement et intégration d'applications IoT et systèmes embarqués.</p>
		</div>
	</div>
</section>

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

	.hero {
		background: linear-gradient(135deg, var(--primary) 0%, #004a99 100%);
		color: white;
		padding: 4rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin-bottom: 4rem;
	}

	:global(.dark-mode) .hero {
		background: linear-gradient(135deg, #4da6ff 0%, #0052a3 100%);
	}

	.hero-content h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
		font-weight: 700;
		color: white;
	}

	.subtitle {
		font-size: 1.3rem;
		margin: 0 0 1rem 0;
		font-weight: 500;
		opacity: 0.95;
		color: white;
	}

	.description {
		font-size: 1rem;
		margin: 0 0 2rem 0;
		opacity: 0.9;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.6;
		color: white;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.75rem 1.75rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}

	.btn-primary {
		background: white;
		color: var(--primary);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		background: #f0f0f0;
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: var(--primary);
		transform: translateY(-2px);
	}

	/* HIGHLIGHTS */
	.highlights {
		margin-top: 3rem;
	}

	.highlights h2 {
		text-align: center;
		font-size: 2rem;
		color: var(--text-primary);
		margin-bottom: 2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.card {
		background: var(--bg-card);
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		text-align: center;
		transition: all 0.3s ease;
		border-top: 3px solid var(--primary);
	}

	.card:hover {
		transform: translateY(-8px);
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
	}

	.icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.card h3 {
		color: var(--primary);
		margin-bottom: 0.75rem;
		font-size: 1.2rem;
	}

	.card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 3rem 1.5rem;
		}

		.hero-content h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}
	}
</style>

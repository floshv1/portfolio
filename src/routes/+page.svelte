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
	.hero {
		background: linear-gradient(135deg, #0066cc 0%, #004a99 100%);
		color: white;
		padding: 4rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin-bottom: 4rem;
	}

	.hero-content h1 {
		font-size: 3rem;
		margin: 0 0 1rem 0;
		font-weight: 700;
	}

	.subtitle {
		font-size: 1.3rem;
		margin: 0 0 1rem 0;
		font-weight: 500;
		opacity: 0.95;
	}

	.description {
		font-size: 1rem;
		margin: 0 0 2rem 0;
		opacity: 0.9;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.6;
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
		color: #0066cc;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: #0066cc;
		transform: translateY(-2px);
	}

	/* HIGHLIGHTS */
	.highlights {
		margin-top: 3rem;
	}

	.highlights h2 {
		text-align: center;
		font-size: 2rem;
		color: #1a1a1a;
		margin-bottom: 2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.card {
		background: white;
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		text-align: center;
		transition: all 0.3s ease;
		border-top: 3px solid #0066cc;
	}

	.card:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
	}

	.icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.card h3 {
		color: #0066cc;
		margin-bottom: 0.75rem;
		font-size: 1.2rem;
	}

	.card p {
		color: #666;
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

<script lang="ts">
	import { onMount } from 'svelte';

	let currentImageIndex = 0;

	const project = {
		title: 'Portfolio Web Moderne',
		subtitle: 'Un portfolio personnel avec Svelte & SvelteKit',
		description: 'Un portfolio web complet showcasant mes projets et compétences. Développé avec Svelte, TypeScript et des technologies web modernes.',
		longDescription: 'Ce projet portfolio démontre ma capacité à créer des interfaces web modernes et responsive. Il inclut une page d\'accueil dynamique, un profil détaillé de type CV, une galerie de projets et un système de contact.',
		image: '/portfolio.png',
		images: [
			'/portfolio-1.png',
			'/portfolio-2.png',
			'/portfolio-3.png'
		],
		technologies: ['Svelte', 'SvelteKit', 'TypeScript', 'CSS3', 'HTML5', 'Vite'],
		features: [
			'Design responsive et moderne',
			'Navigation fluide',
			'Page profil détaillée',
			'Galerie de projets',
			'Performance optimisée',
			'Accessibilité (A11y)'
		],
		duration: '2 semaines',
		role: 'Développeur Full Stack',
		status: 'Complété',
		github: '#',
		live: '#',
		highlights: [
			'Architecture composant modulaire',
			'SEO optimisé',
			'Design system cohérent',
			'Animations fluides'
		]
	};

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % project.images.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
	}

	onMount(() => {
		const interval = setInterval(nextImage, 5000);
		return () => clearInterval(interval);
	});
</script>

<div class="project-detail">
	<!-- HERO SECTION -->
	<section class="hero">
		<div class="hero-content">
			<h1>{project.title}</h1>
			<p class="subtitle">{project.subtitle}</p>
			<p class="description">{project.description}</p>
			<div class="actions">
				<a href={project.github} class="btn btn-primary">Code GitHub</a>
				<a href={project.live} class="btn btn-secondary">Voir en direct</a>
			</div>
		</div>
	</section>

	<!-- GALLERY -->
	<section class="gallery">
		<div class="carousel">
			<button class="carousel-btn prev" on:click={prevImage}>❮</button>
			<div class="carousel-image">
				<img src={project.images[currentImageIndex]} alt="Capture du projet" />
			</div>
			<button class="carousel-btn next" on:click={nextImage}>❯</button>
		</div>
		<div class="carousel-indicators">
			{#each project.images as _, index}
				<button
					class="indicator {index === currentImageIndex ? 'active' : ''}"
					on:click={() => (currentImageIndex = index)}
				/>
			{/each}
		</div>
	</section>

	<!-- DETAILS -->
	<div class="details-grid">
		<div class="detail-card">
			<h3>📅 Durée</h3>
			<p>{project.duration}</p>
		</div>
		<div class="detail-card">
			<h3>👤 Rôle</h3>
			<p>{project.role}</p>
		</div>
		<div class="detail-card">
			<h3>✅ Statut</h3>
			<p><span class="status">{project.status}</span></p>
		</div>
	</div>

	<!-- DESCRIPTION -->
	<section class="content-section">
		<h2>À propos du projet</h2>
		<p>{project.longDescription}</p>
	</section>

	<!-- FEATURES -->
	<section class="content-section">
		<h2>Fonctionnalités</h2>
		<div class="features-list">
			{#each project.features as feature}
				<div class="feature-item">
					<span class="check">✓</span>
					<span>{feature}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- HIGHLIGHTS -->
	<section class="content-section">
		<h2>Points clés</h2>
		<div class="highlights-grid">
			{#each project.highlights as highlight}
				<div class="highlight-card">
					<p>{highlight}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- TECHNOLOGIES -->
	<section class="content-section">
		<h2>Technologies utilisées</h2>
		<div class="tech-tags">
			{#each project.technologies as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section class="cta-section">
		<h2>Intéressé par ce projet ?</h2>
		<p>Explorez d'autres projets ou contactez-moi pour en savoir plus.</p>
		<div class="cta-buttons">
			<a href="/projects" class="btn btn-primary">Voir d'autres projets</a>
			<a href="/profile" class="btn btn-secondary">En savoir plus sur moi</a>
		</div>
	</section>
</div>

<style>
	.project-detail {
		width: 100%;
	}

	/* HERO */
	.hero {
		background: linear-gradient(135deg, #0066cc 0%, #004a99 100%);
		color: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		margin-bottom: 3rem;
	}

	.hero-content h1 {
		font-size: 2.5rem;
		margin: 0 0 0.5rem 0;
	}

	.subtitle {
		font-size: 1.2rem;
		opacity: 0.95;
		margin: 0 0 1rem 0;
	}

	.description {
		font-size: 1rem;
		opacity: 0.9;
		margin: 0 0 2rem 0;
		line-height: 1.6;
		max-width: 600px;
	}

	.actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* GALLERY */
	.gallery {
		margin-bottom: 3rem;
	}

	.carousel {
		position: relative;
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel-image {
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.carousel-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;
		font-size: 1.5rem;
		transition: all 0.3s ease;
		z-index: 10;
	}

	.carousel-btn:hover {
		background: rgba(0, 0, 0, 0.8);
	}

	.carousel-btn.prev {
		left: 1rem;
	}

	.carousel-btn.next {
		right: 1rem;
	}

	.carousel-indicators {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #ddd;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.indicator.active {
		background: #0066cc;
		width: 30px;
		border-radius: 6px;
	}

	/* DETAILS GRID */
	.details-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.detail-card {
		background: white;
		padding: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		border-left: 4px solid #0066cc;
	}

	.detail-card h3 {
		color: #0066cc;
		margin: 0 0 0.75rem 0;
		font-size: 1rem;
	}

	.detail-card p {
		margin: 0;
		color: #333;
		font-weight: 600;
	}

	.status {
		background: #e6f0ff;
		color: #0066cc;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.9rem;
	}

	/* CONTENT SECTIONS */
	.content-section {
		background: white;
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		margin-bottom: 2rem;
	}

	.content-section h2 {
		color: #0066cc;
		margin-top: 0;
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
	}

	.content-section p {
		color: #555;
		line-height: 1.8;
		margin: 0 0 1.5rem 0;
	}

	/* FEATURES LIST */
	.features-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.feature-item {
		display: flex;
		gap: 0.75rem;
		padding: 1rem;
		background: #f9f9f9;
		border-radius: 8px;
		border-left: 3px solid #00a86b;
	}

	.check {
		color: #00a86b;
		font-weight: 700;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.feature-item span:last-child {
		color: #333;
	}

	/* HIGHLIGHTS */
	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.highlight-card {
		background: linear-gradient(135deg, #e6f0ff 0%, #f0f8ff 100%);
		padding: 1.5rem;
		border-radius: 8px;
		border: 2px solid #0066cc;
	}

	.highlight-card p {
		margin: 0;
		color: #0066cc;
		font-weight: 600;
		text-align: center;
	}

	/* TECH TAGS */
	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tech-tag {
		background: #f0f0f0;
		color: #0066cc;
		padding: 0.6rem 1.2rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		border: 2px solid #0066cc;
		transition: all 0.3s ease;
	}

	.tech-tag:hover {
		background: #0066cc;
		color: white;
	}

	/* CTA SECTION */
	.cta-section {
		background: linear-gradient(135deg, #0066cc 0%, #004a99 100%);
		color: white;
		padding: 3rem 2rem;
		border-radius: 12px;
		text-align: center;
		margin-top: 3rem;
	}

	.cta-section h2 {
		color: white;
		margin-bottom: 0.5rem;
	}

	.cta-section p {
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* BUTTONS */
	.btn {
		padding: 0.75rem 1.75rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		display: inline-block;
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

	.cta-section .btn-secondary {
		border: 2px solid white;
		color: white;
	}

	/* RESPONSIVE */
	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 1.8rem;
		}

		.carousel {
			height: 300px;
		}

		.carousel-btn {
			width: 40px;
			height: 40px;
			font-size: 1.2rem;
		}

		.content-section {
			padding: 1.5rem;
		}

		.details-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

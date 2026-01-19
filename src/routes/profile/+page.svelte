<h1>Mon Profil</h1>

<section class="profile-header">
	<div class="photo">
        <img src="/profile.webp" alt="Photo de Florian Cazac" />
    </div>
	
	<div class="header-info">
		<h2>Florian Cazac</h2>
		<p class="title">Etudiant M1, Objets Connectés & Cybersécurité</p>
		<p class="email">📧 cazac.florian@gmail.com</p>
		<p class="bio">Passionné par le développement web et les nouvelles technologies. Spécialisé en JavaScript, TypeScript et Svelte.</p>
	</div>
</section>

<div class="cv-content">
	<!-- FORMATIONS -->
	<section class="cv-section">
		<h3>📚 Formations</h3>
		<div class="timeline">
			<div class="timeline-item">
				<h4>Master 1 - Objets Connectés & Cybersécurité</h4>
				<p class="subtitle">ESILV • 2022 - 2027</p>
				<p>Formation spécialisée en IoT et sécurité informatique</p>
			</div>
			<div class="timeline-item">
				<h4>Licence - Informatique</h4>
				<p class="subtitle">UCC - UVIC • 2024 - 2024</p>
				<p>Base solide en programmation et concepts informatiques</p>
			</div>
		</div>
	</section>

	<!-- EXPERIENCES -->
	<section class="cv-section">
		<h3>💼 Expériences Professionnelles</h3>
		<div class="timeline">
			<div class="timeline-item">
				<h4>Développeur Web - [Entreprise]</h4>
				<p class="subtitle">[Période] • [Localisation]</p>
				<ul>
					<li>Développement frontend avec Svelte et React</li>
					<li>Création d'interfaces utilisateur responsives</li>
					<li>Collaboration avec l'équipe backend</li>
				</ul>
			</div>
			<div class="timeline-item">
				<h4>Stage - [Entreprise]</h4>
				<p class="subtitle">[Période] • [Localisation]</p>
				<ul>
					<li>Description de vos missions</li>
					<li>Technologies utilisées</li>
					<li>Résultats obtenus</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- COMPETENCES -->
	<section class="cv-section">
		<h3>🛠️ Compétences</h3>
		<div class="skills-grid">
			<div class="skill-category">
				<h4>Langages</h4>
				<div class="skill-tags">
					<span class="skill-tag">JavaScript</span>
					<span class="skill-tag">TypeScript</span>
					<span class="skill-tag">Python</span>
					<span class="skill-tag">HTML & CSS</span>
				</div>
			</div>
			<div class="skill-category">
				<h4>Frameworks & Outils</h4>
				<div class="skill-tags">
					<span class="skill-tag">Svelte</span>
					<span class="skill-tag">SvelteKit</span>
					<span class="skill-tag">React</span>
					<span class="skill-tag">Git</span>
				</div>
			</div>
			<div class="skill-category">
				<h4>Cybersécurité & IoT</h4>
				<div class="skill-tags">
					<span class="skill-tag">Sécurité Web</span>
					<span class="skill-tag">Objets Connectés</span>
					<span class="skill-tag">Arduino</span>
				</div>
			</div>
		</div>
	</section>

	<!-- CERTIFICATS -->
	<section class="cv-section">
		<h3>🎖️ Certificats</h3>
		<div class="certificates">
			<div class="certificate-item">
				<h4>Certification [Nom]</h4>
				<p class="subtitle">[Organisme] • [Année]</p>
				<p>Description ou lien vers le certificat</p>
			</div>
			<div class="certificate-item">
				<h4>Certification [Nom]</h4>
				<p class="subtitle">[Organisme] • [Année]</p>
				<p>Description ou lien vers le certificat</p>
			</div>
		</div>
	</section>
</div>

<style>
	/* HEADER */
	.profile-header {
		display: flex;
		gap: 2rem;
		margin-bottom: 3rem;
		padding: 2rem;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		border-radius: 12px;
	}

	.photo img {
		border-radius: 50%;
		width: 180px;
		height: 180px;
		object-fit: cover;
		border: 4px solid #0066cc;
		flex-shrink: 0;
	}

	.header-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header-info h2 {
		margin: 0 0 0.5rem 0;
		font-size: 2rem;
		color: #0066cc;
	}

	.title {
		font-size: 1.1rem;
		font-weight: 600;
		color: #333;
		margin: 0.5rem 0;
	}

	.email {
		color: #666;
		margin: 0.5rem 0;
	}

	.bio {
		color: #555;
		line-height: 1.6;
		margin-top: 1rem;
	}

	/* CV CONTENT */
	.cv-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.cv-section {
		margin-bottom: 3rem;
	}

	.cv-section h3 {
		font-size: 1.5rem;
		color: #0066cc;
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 3px solid #0066cc;
	}

	/* TIMELINE */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.timeline-item {
		padding: 1.5rem;
		background: #f9f9f9;
		border-left: 4px solid #0066cc;
		border-radius: 4px;
		transition: box-shadow 0.3s ease;
	}

	.timeline-item:hover {
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
	}

	.timeline-item h4 {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
		color: #333;
	}

	.subtitle {
		color: #0066cc;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		font-size: 0.95rem;
	}

	.timeline-item p {
		color: #555;
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	.timeline-item ul {
		margin: 1rem 0 0 0;
		padding-left: 1.5rem;
		color: #555;
	}

	.timeline-item li {
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	/* SKILLS */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.skill-category h4 {
		color: #333;
		font-size: 1rem;
		margin: 0 0 1rem 0;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.skill-tag {
		background: #e6f0ff;
		color: #0066cc;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid #0066cc;
		transition: all 0.3s ease;
	}

	.skill-tag:hover {
		background: #0066cc;
		color: white;
	}

	/* CERTIFICATES */
	.certificates {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.certificate-item {
		padding: 1.5rem;
		border: 2px solid #0066cc;
		border-radius: 8px;
		background: #f9f9f9;
		transition: transform 0.3s ease;
	}

	.certificate-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
	}

	.certificate-item h4 {
		margin: 0 0 0.5rem 0;
		color: #0066cc;
		font-size: 1rem;
	}

	.certificate-item p {
		color: #555;
		margin: 0.5rem 0;
		font-size: 0.9rem;
	}

	/* RESPONSIVE */
	@media (max-width: 768px) {
		.profile-header {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.header-info {
			align-items: center;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.header-info h2 {
			font-size: 1.5rem;
		}

		.cv-section h3 {
			font-size: 1.2rem;
		}
	}
</style>

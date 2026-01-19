<script lang="ts">
	const formations = [
		{
			title: 'Master 1 - Objets Connectés & Cybersécurité',
			date: 'Sept 2022 - Sept 2027',
			org: 'ESILV',
			location: 'La Défense, Paris',
			desc: 'Formation spécialisée en IoT et sécurité informatique. Cours incluant réseaux embarqués, cybersécurité, architecture des systèmes et développement logiciel avancé.'
		},
		{
			title: 'Licence - Informatique',
			date: 'Sept 2024 - Juin 2025',
			org: 'UCC - UVIC',
			location: 'Mont-de-Marsan',
			desc: 'Base solide en programmation et concepts informatiques. Approfondissement en algorithmique, bases de données et développement logiciel.'
		}
	];

	const experiences = [
		{
			role: 'Développeur Web Frontend',
			date: 'Jan 2024 - Présent',
			company: 'Tech Solutions',
			location: 'Paris',
			tasks: [
				'Développement frontend avec Svelte et React',
				"Création d'interfaces utilisateur responsives et accessibles",
				"Collaboration avec l'équipe backend sur des APIs",
				'Optimisation des performances et SEO'
			]
		},
		{
			role: 'Stage - Développement Web',
			date: 'Juin 2023 - Août 2023',
			company: 'Web Agency',
			location: 'Lyon',
			tasks: [
				"Refonte du site vitrine de l'agence",
				'Intégration de maquettes Figma en HTML/CSS',
				'Correction de bugs et maintenance'
			]
		}
	];

	const skills = [
		{ category: 'Langages', tags: ['JavaScript', 'TypeScript', 'Python', 'HTML & CSS'] },
		{ category: 'Frameworks & Outils', tags: ['Svelte', 'SvelteKit', 'React', 'Git'] },
		{ category: 'Cybersécurité & IoT', tags: ['Sécurité Web', 'Objets Connectés', 'Arduino'] }
	];

	const certificats = [
		{
			name: 'Certification ANSSI',
			org: 'SecNumAcadémie',
			year: '2023',
			desc: 'Fondamentaux de la cybersécurité'
		},
		{ name: 'TOEIC', org: 'ETS Global', year: '2022', desc: 'Score : 850/990' }
	];

	const Associations = [
		{
			name: 'DeVinci Fablab',
			date: '2022 - Présent',
			description:
				"Membre actif du fablab de l'ESILV, participation à des projets IoT et impression 3D.",
		},
		{
			name: 'DaVinci Bot',
			date: '2024 - 2025',
			description: 'Membre de l\'équipe Travelers',
		}

	];
</script>

<h1>Mon Profil</h1>

<section class="profile-header">
	<div class="photo">
		<img src="/profile.webp" alt="Photo de Florian Cazac" />
	</div>

	<div class="header-info">
		<h2>Florian Cazac</h2>
		<p class="title">Etudiant M1, Objets Connectés & Cybersécurité</p>
		<p class="email">📧 cazac.florian@gmail.com</p>
		<p class="bio">
			Passionné par le développement web et les nouvelles technologies. Spécialisé en JavaScript,
			TypeScript et Svelte.
		</p>
	</div>
</section>

<div class="cv-content">
	<section class="cv-section">
		<h3>🛠️ Compétences</h3>
		<div class="skills-grid">
			{#each skills as group}
				<div class="skill-category">
					<h4>{group.category}</h4>
					<div class="skill-tags">
						{#each group.tags as tag}
							<span class="skill-tag">{tag}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="cv-section">
		<h3>📚 Formations</h3>
		<div class="timeline">
			{#each formations as item}
				<div class="timeline-item">
					<div class="timeline-header">
						<div class="timeline-title">
							<h4>{item.title}</h4>
						</div>
						<div class="timeline-date">
							<p>{item.date}</p>
						</div>
					</div>
					<div class="timeline-school">
						<div class="timeline-org">
							<p class="organization">{item.org}</p>
						</div>
						<div class="timeline-location">
							<p class="location">{item.location}</p>
						</div>
					</div>
					<div class="timeline-content">
						<p>{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="cv-section">
		<h3>💼 Expériences Professionnelles</h3>
		<div class="timeline">
			{#each experiences as item}
				<div class="timeline-item">
					<div class="timeline-header">
						<div class="timeline-title">
							<h4>{item.role}</h4>
						</div>
						<div class="timeline-date">
							<p>{item.date}</p>
						</div>
					</div>
					<div class="timeline-school">
						<div class="timeline-org">
							<p class="organization">{item.company}</p>
						</div>
						<div class="timeline-location">
							<p class="location">{item.location}</p>
						</div>
					</div>
					<div class="timeline-content">
						<ul>
							{#each item.tasks as task}
								<li>{task}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="cv-section">
		<h3>🎖️ Certificats</h3>
		<div class="certificates">
			{#each certificats as cert}
				<div class="certificate-item">
					<h4>{cert.name}</h4>
					<p class="subtitle">{cert.org} • {cert.year}</p>
					<p>{cert.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="cv-section">
		<h3>🤝 Associations</h3>
		<div class="timeline">
			{#each Associations as assoc}
				<div class="timeline-item">
					<div class="timeline-header">
						<div class="timeline-title">
							<h4>{assoc.name}</h4>
						</div>
						<div class="timeline-date">
							<p>{assoc.date}</p>
						</div>
					</div>
					<div class="timeline-content">
						<p>{assoc.description}</p>
					</div>
				</div>
			{/each}
		</div>
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
		font-family: 'Segoe UI', sans-serif; /* J'ai ajouté une police par défaut propre */
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
		gap: 2rem;
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

	/* Header - Titre et Date sur la même ligne */
	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 2rem;
	}

	.timeline-title {
		flex: 1;
	}

	.timeline-title h4 {
		margin: 0;
		font-size: 1.1rem;
		color: #333;
		font-weight: 600;
	}

	.timeline-date {
		text-align: right;
		white-space: nowrap;
	}

	.timeline-date p {
		margin: 0;
		color: #0066cc;
		font-weight: 600;
		font-size: 0.95rem;
	}

	/* Organisation et Localité sur la même ligne */
	.timeline-school {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 2rem;
		padding-bottom: 0.5rem;
	}

	.timeline-org {
		flex: 1;
	}

	.timeline-org .organization {
		margin: 0;
		color: #555;
		font-weight: 500;
		font-size: 0.95rem;
	}

	.timeline-location {
		text-align: right;
		white-space: nowrap;
	}

	.timeline-location .location {
		margin: 0;
		color: #666;
		font-size: 0.95rem;
	}

	/* Contenu */
	.timeline-content {
		margin-top: 0.5rem;
	}

	.timeline-content p {
		color: #555;
		margin: 0.5rem 0;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.timeline-content ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
		color: #555;
	}

	.timeline-content li {
		margin: 0.35rem 0;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.subtitle {
		color: #0066cc;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		font-size: 0.95rem;
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

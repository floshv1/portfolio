<script lang="ts">
	const formations = [
		{
			title: 'Master 1 - Objets Connectés & Cybersécurité labellisé ANSSI',
			date: 'Sept 2022 - Sept 2027',
			org: 'ESILV',
			location: 'La Défense, Paris',
			desc: 'Formation spécialisée en IoT et sécurité informatique. Cours incluant réseaux embarqués, cybersécurité, architecture des systèmes et développement logiciel avancé.'
		},
		{
			title: 'Echange Universitaire',
			date: 'Sept 2024 - Jan 2025',
			org: 'UCC - UVIC',
			location: 'Vic, Espagne',
			desc: 'Cours de data & IA, Python et Optimisation et recherche opérationnelle.'
		}
	];

	const experiences = [
		{
			role: 'Secrétaire Général',
			date: 'Mars 2025 - Fev 2026',
			company: 'DeVinci FabLab',
			location: 'La Défense, Paris',
			tasks: [
				'Redaction des comptes-rendus des réunions',
				'Organisation des recrutements et des entretien',
				'Gestion de la communication interne et externe',
				'Gestion des registres administratifs de l\'association'
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
		{ category: 'Langages', tags: ['JavaScript', 'TypeScript', 'Python', 'HTML & CSS', 'C#', 'C/C++'] },
		{ category: 'Frameworks & Outils', tags: ['Svelte', 'SvelteKit', 'React', 'Git & Github', 'Docker'] },
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
		},
		{
			name: 'DaVinci Esport',
			date: '2022 - 2025',
			description: 'Membre de l\'équipe TeamFight Tactics.',
		}

	];
</script>

<h1>Mon Profil</h1>

<section class="profile-header">
	<div class="photo">
		<img src="/profile.webp" />
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

<div class="profile-container">
	<aside class="table-of-contents">
		<h3>Sommaire</h3>
		<nav>
			<ul>
				<li><a href="#skills">🛠️ Compétences</a></li>
				<li><a href="#formations">📚 Formations</a></li>
				<li><a href="#experiences">💼 Expériences</a></li>
				<li><a href="#certificates">🎖️ Certificats</a></li>
				<li><a href="#associations">🤝 Associations</a></li>
			</ul>
		</nav>
	</aside>

	<div class="cv-content">
	<section class="cv-section" id="skills">
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
	<section class="cv-section" id="formations">
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

	<section class="cv-section" id="experiences">
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

	<section class="cv-section" id="certificates">
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

	<section class="cv-section" id="associations">
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
	</section>
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

	/* HEADER */
	.profile-header {
		display: flex;
		gap: 2rem;
		margin-bottom: 3rem;
		padding: 2rem;
		background: linear-gradient(135deg, var(--bg-light) 0%, var(--primary-light) 100%);
		border-radius: 12px;
		transition: background 0.3s ease;
	}

	:global(.dark-mode) .profile-header {
		background: linear-gradient(135deg, var(--bg-card) 0%, var(--primary-light) 100%);
	}

	.photo img {
		border-radius: 50%;
		width: 180px;
		height: 180px;
		object-fit: cover;
		border: 4px solid var(--primary);
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
		color: var(--primary);
	}

	.title {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0.5rem 0;
	}

	.email {
		color: var(--text-secondary);
		margin: 0.5rem 0;
	}

	.bio {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-top: 1rem;
	}

	/* CV CONTENT */
	.profile-container {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: 3rem;
		margin-top: 2rem;
	}

	.table-of-contents {
		position: sticky;
		top: 100px;
		height: fit-content;
	}

	.table-of-contents h3 {
		font-size: 1.2rem;
		color: var(--primary);
		margin: 0 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--primary);
	}

	.table-of-contents nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.table-of-contents nav li {
		margin: 0.75rem 0;
	}

	.table-of-contents nav a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.95rem;
		display: block;
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		transition: all 0.3s ease;
		border-left: 3px solid transparent;
	}

	.table-of-contents nav a:hover {
		color: var(--primary);
		background: var(--primary-light);
		border-left-color: var(--primary);
		padding-left: 1.25rem;
	}

	.cv-content {
		max-width: 900px;
		margin: 0 auto;
		font-family: 'Segoe UI', sans-serif;
	}

	.cv-section {
		margin-bottom: 3rem;
	}

	.cv-section h3 {
		font-size: 1.5rem;
		color: var(--primary);
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 3px solid var(--primary);
	}

	/* TIMELINE */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.timeline-item {
		padding: 1.5rem;
		background: var(--bg-card);
		border-left: 4px solid var(--primary);
		border-radius: 4px;
		transition: box-shadow 0.3s ease;
	}

	.timeline-item:hover {
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
	}

	:global(.dark-mode) .timeline-item:hover {
		box-shadow: 0 4px 12px rgba(77, 166, 255, 0.15);
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
		color: var(--text-primary);
		font-weight: 600;
	}

	.timeline-date {
		text-align: right;
		white-space: nowrap;
	}

	.timeline-date p {
		margin: 0;
		color: var(--primary);
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
		color: var(--text-secondary);
		font-weight: 500;
		font-size: 0.95rem;
	}

	.timeline-location {
		text-align: right;
		white-space: nowrap;
	}

	.timeline-location .location {
		margin: 0;
		color: var(--text-muted);
		font-size: 0.95rem;
	}

	/* Contenu */
	.timeline-content {
		margin-top: 0.5rem;
	}

	.timeline-content p {
		color: var(--text-secondary);
		margin: 0.5rem 0;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.timeline-content ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
		color: var(--text-secondary);
	}

	.timeline-content li {
		margin: 0.35rem 0;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.subtitle {
		color: var(--primary);
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
		color: var(--text-primary);
		font-size: 1rem;
		margin: 0 0 1rem 0;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.skill-tag {
		background: var(--primary-light);
		color: var(--primary);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid var(--primary);
		transition: all 0.3s ease;
	}

	.skill-tag:hover {
		background: var(--primary);
		color: white;
	}

	:global(.dark-mode) .skill-tag {
		background: var(--primary-light);
		color: var(--primary);
		border-color: var(--primary);
	}

	:global(.dark-mode) .skill-tag:hover {
		background: var(--primary);
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
		border: 2px solid var(--primary);
		border-radius: 8px;
		background: var(--bg-card);
		transition: transform 0.3s ease;
	}

	.certificate-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
	}

	:global(.dark-mode) .certificate-item:hover {
		box-shadow: 0 4px 12px rgba(77, 166, 255, 0.2);
	}

	.certificate-item h4 {
		margin: 0 0 0.5rem 0;
		color: var(--primary);
		font-size: 1rem;
	}

	.certificate-item p {
		color: var(--text-secondary);
		margin: 0.5rem 0;
		font-size: 0.9rem;
	}

	/* RESPONSIVE */
	@media (max-width: 768px) {
		.profile-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.table-of-contents {
			position: static;
			margin-bottom: 1.5rem;
		}

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

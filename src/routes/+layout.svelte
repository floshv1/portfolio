<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from '$lib/theme';

	let { children } = $props();

	function toggleTheme() {
		theme.update((t) => !t);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		:global(body) {
			margin: 0;
			padding: 0;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
			background: #f8f9fa;
			color: #333;
			transition: background-color 0.3s ease, color 0.3s ease;
		}

		:global(body.dark-mode) {
			background: #1a1a1a;
			color: #e0e0e0;
		}

		:global(*) {
			box-sizing: border-box;
		}
	</style>
</svelte:head>

<div class="layout-wrapper">
	<nav class="navbar">
		<div class="nav-container">
			<div class="logo">FC</div>
			<ul class="nav-links">
				<li><a href="/">Accueil</a></li>
				<li><a href="/profile">Profil</a></li>
				<li><a href="/projects">Projets</a></li>
				<li><a href="/contactme">Contact</a></li>
			</ul>
			<button class="theme-toggle" on:click={toggleTheme} title="Basculer le mode sombre">
				{#if $theme}
					<span>☀️</span>
				{:else}
					<span>🌙</span>
				{/if}
			</button>
		</div>
	</nav>

	<main class="main-content">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="footer-content">
			<p>&copy; 2025 Florian Cazac. Tous droits réservés.</p>
			<div class="social-links">
				<a href="https://github.com/floshv1" target="_blank">GitHub</a>
				<a href="https://www.linkedin.com/in/fcazac/" target="_blank">LinkedIn</a>
				<a href="mailto:cazac.florian@gmail.com">Email</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(:root) {
		--primary: #0066cc;
		--primary-light: #e6f0ff;
		--secondary: #00a86b;
		--dark: #1a1a1a;
		--light-gray: #f8f9fa;
		--border-gray: #e0e0e0;
		--text-muted: #666;
	}

	.layout-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: #f8f9fa;
		transition: background-color 0.3s ease;
	}

	:global(.dark-mode) .layout-wrapper {
		background: #1a1a1a;
	}

	/* NAVBAR */
	.navbar {
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		position: sticky;
		top: 0;
		z-index: 100;
		transition: background-color 0.3s ease;
	}

	:global(.dark-mode) .navbar {
		background: #2a2a2a;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary);
		min-width: 50px;
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 2.5rem;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		text-decoration: none;
		color: #333;
		font-weight: 500;
		font-size: 0.95rem;
		transition: all 0.3s ease;
		position: relative;
	}

	:global(.dark-mode) .nav-links a {
		color: #e0e0e0;
	}

	.nav-links a:hover {
		color: var(--primary);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary);
		transition: width 0.3s ease;
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	.theme-toggle {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s ease;
		border-radius: 50%;
	}

	.theme-toggle:hover {
		transform: rotate(20deg);
		background-color: rgba(0, 102, 204, 0.1);
	}

	:global(.dark-mode) .theme-toggle:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* MAIN CONTENT */
	.main-content {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 3rem 2rem;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	:global(.dark-mode) .main-content {
		background: #1a1a1a;
		color: #e0e0e0;
	}

	/* FOOTER */
	.footer {
		background: #1a1a1a;
		color: white;
		margin-top: 4rem;
		border-top: 3px solid var(--primary);
		transition: background-color 0.3s ease;
	}

	:global(.dark-mode) .footer {
		background: #0d0d0d;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-content p {
		margin: 0;
		color: #999;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
	}

	.social-links a {
		color: white;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.3s ease;
	}

	.social-links a:hover {
		color: var(--primary);
	}

	/* RESPONSIVE */
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}

		.nav-links {
			gap: 1.5rem;
			font-size: 0.85rem;
		}

		.main-content {
			padding: 2rem 1rem;
		}

		.footer-content {
			flex-direction: column;
			gap: 1.5rem;
			text-align: center;
		}

		.social-links {
			justify-content: center;
		}
	}
</style>
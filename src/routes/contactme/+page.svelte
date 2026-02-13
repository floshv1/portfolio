<script>
	let formData = {
		name: '',
		email: '',
		message: ''
	};
	let isLoading = false;
	let submitStatus = null;

	async function handleSubmit(e) {
		e.preventDefault();
		isLoading = true;
		submitStatus = null;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				submitStatus = { type: 'success', message: 'Message envoyé avec succès !' };
				formData = { name: '', email: '', message: '' };
			} else {
				submitStatus = { type: 'error', message: 'Erreur lors de l\'envoi. Veuillez réessayer.' };
			}
		} catch (error) {
			submitStatus = { type: 'error', message: 'Erreur de connexion. Veuillez réessayer.' };
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="contact-container">
	<h1>Contactez-moi</h1>
	<p class="subtitle">N'hésitez pas à me contacter pour toute question ou opportunité</p>

	<form class="contact-form" on:submit={handleSubmit}>
		<div class="form-group">
			<label for="name">Nom complet</label>
			<input
				type="text"
				id="name"
				bind:value={formData.name}
				required
				disabled={isLoading}
				placeholder="Votre nom"
			/>
		</div>

		<div class="form-group">
			<label for="email">Adresse email</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				required
				disabled={isLoading}
				placeholder="votre.email@exemple.com"
			/>
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea
				id="message"
				bind:value={formData.message}
				required
				disabled={isLoading}
				placeholder="Écrivez votre message ici..."
				rows="6"
			></textarea>
		</div>

		{#if submitStatus}
			<div class="alert alert-{submitStatus.type}">
				{submitStatus.message}
			</div>
		{/if}

		<button type="submit" class="btn btn-primary" disabled={isLoading}>
			{isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
		</button>
	</form>

	<div class="contact-info">
		<h3>Autres moyens de me contacter</h3>
		<div class="info-grid">
			<div class="info-card">
				<div class="info-icon">✉️</div>
				<p class="info-label">Email</p>
				<a href="mailto:cazac.florian@gmail.com">cazac.florian@gmail.com</a>
			</div>
			<div class="info-card">
				<div class="info-icon">💼</div>
				<p class="info-label">LinkedIn</p>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Mon profil</a>
			</div>
			<div class="info-card">
				<div class="info-icon">🐙</div>
				<p class="info-label">GitHub</p>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer">Mes projets</a>
			</div>
		</div>
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

	h1 {
		color: var(--primary);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 600px;
		margin-top: 2rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.form-group input,
	.form-group textarea {
		padding: 0.75rem;
		border: 1px solid var(--border-color);
		border-radius: 6px;
		background: var(--bg-card);
		color: var(--text-primary);
		font-size: 1rem;
		font-family: inherit;
		transition: all 0.3s ease;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--primary);
		box-shadow: 0 0 0 3px var(--primary-light);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 150px;
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
		display: inline-block;
		align-self: flex-start;
	}

	.btn-primary {
		background: var(--primary);
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		background: #004a99;
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.contact-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.subtitle {
		color: var(--text-secondary);
		font-size: 1.1rem;
		margin-top: 0.5rem;
		margin-bottom: 2rem;
	}

	.alert {
		padding: 1rem;
		border-radius: 6px;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.alert-success {
		background: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
	}

	.alert-error {
		background: #f8d7da;
		color: #721c24;
		border: 1px solid #f5c6cb;
	}

	:global(.dark-mode) .alert-success {
		background: #1e4620;
		color: #4caf50;
		border: 1px solid #2d5e2d;
	}

	:global(.dark-mode) .alert-error {
		background: #5a2c2c;
		color: #ff6b6b;
		border: 1px solid #6b3c3c;
	}

	.contact-info {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid var(--border-color);
	}

	.contact-info h3 {
		color: var(--primary);
		margin-bottom: 1.5rem;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
	}

	.info-card {
		background: var(--bg-card);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.info-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
		border-color: var(--primary);
	}

	.info-icon {
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.info-label {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.info-card a {
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.info-card a:hover {
		color: #004a99;
		text-decoration: underline;
	}

	:global(.dark-mode) .info-card:hover {
		box-shadow: 0 4px 12px rgba(77, 166, 255, 0.15);
	}

	@media (max-width: 640px) {
		.contact-container {
			padding: 1rem;
		}

		.contact-form {
			gap: 0.75rem;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

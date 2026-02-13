import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, message } = await request.json();

	// Validation basique
	if (!name || !email || !message) {
		return json({ error: 'Tous les champs sont requis' }, { status: 400 });
	}

	if (!email.includes('@')) {
		return json({ error: 'Email invalide' }, { status: 400 });
	}

	if (message.trim().length < 10) {
		return json({ error: 'Le message doit contenir au moins 10 caractères' }, { status: 400 });
	}

	try {
		// Ici, tu peux ajouter la logique d'envoi d'email
		// Par exemple, utiliser un service comme SendGrid, Nodemailer, etc.
		
		// Pour l'instant, on simule une réussite
		console.log('Message reçu:', { name, email, message });

		return json({ success: true, message: 'Message reçu avec succès' }, { status: 200 });
	} catch (error) {
		console.error('Erreur lors du traitement du message:', error);
		return json({ error: 'Erreur serveur' }, { status: 500 });
	}
};

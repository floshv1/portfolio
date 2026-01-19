<h1>Contactez-moi</h1>
<form class="contact-form" action="mailto:cazac.florian@gmail.com">
    <label for="name">Nom :</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message :</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Envoyer</button>
</form>

<style>
    h1 {
        color: #0066cc;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 600px;
        margin-top: 2rem;
    }

    .contact-form label {
        font-weight: 500;
        color: #333;
    }

    .contact-form input,
    .contact-form textarea {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
    }

    .contact-form button {
        background-color: #0066cc;
        color: white;
        border: none;
        padding: 0.75rem;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .contact-form button:hover {
        background-color: #005bb5;
    }   
</style>    
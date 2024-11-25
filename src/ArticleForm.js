import React, { useState, useContext } from 'react';
import { ArticleContext } from './ArticleContext';

const ArticleForm = () => {
    const { addArticle } = useContext(ArticleContext);

    // États pour les champs du formulaire
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    // État pour afficher un message d'erreur si le nom d'utilisateur est refusé
    const [errorMessage, setErrorMessage] = useState('');

    // Liste des noms d'utilisateur interdits
    const forbiddenUsernames = ['admin', 'root', 'superuser', 'test', 'anonymous'];

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifie si le nom d'utilisateur est interdit
        if (forbiddenUsernames.includes(author.toLowerCase())) {
            setErrorMessage('Ce nom d\'utilisateur est interdit. Veuillez réessayez.');
        } else if (title && content && author) {
            // Si tout est correct, ajoute l'article
            addArticle(title, content, author);

            // Réinitialise les champs du formulaire
            setTitle('');
            setContent('');
            setAuthor('');
            setErrorMessage(''); // Réinitialise le message d'erreur
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titre:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contenu:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Auteur:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>

            {/* Affichage d'un message d'erreur si le nom d'utilisateur est refusé */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button type="submit">Poster l'article</button>
        </form>
    );
};

export default ArticleForm;

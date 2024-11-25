import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:1337/api/articles')
            .then((response) => {
                console.log("Réponse brute:", response); // Vérifie que l'URL est correcte
                return response.json();
            })
            .then((data) => {
                console.log("Données JSON complètes:", data); // Affiche la réponse JSON complète
                if (data && data.data) { // Vérifie que `data` contient une clé `data`
                    setArticles(data.data);
                    setLoading(false);
                } else {
                    console.error("Structure inattendue dans la réponse JSON:", data);
                    setArticles([]);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des articles :", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement des articles...</p>;
    }

    return (
        <div>
            <h1>Articles du Blog</h1>
            {articles.length > 0 ? (
                articles.map((article) => (
                    <div key={article.id}>
                        <h2>{article?.attributes?.title || "Titre indisponible"}</h2>
                        <p>{article?.attributes?.content || "Contenu indisponible"}</p>
                    </div>
                ))
            ) : (
                <p>Aucun article trouvé.</p>
            )}
        </div>
    );

};

export default Articles;

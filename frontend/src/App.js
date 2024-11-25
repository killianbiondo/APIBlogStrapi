import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]); // État pour stocker les articles
  const [loading, setLoading] = useState(true); // État pour l'indicateur de chargement


  const API_URL = 'http://localhost:1338/api/articles';

  // Fonction pour récupérer les articles depuis Strapi
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        const data = await response.json();
        setArticles(data.data); // Met à jour les articles avec les données récupérées
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false); // Arrête le chargement une fois la requête terminée
      }
    };

    fetchArticles();
  }, []);

  // Si les articles sont en cours de chargement, afficher un message
  if (loading) {
    return <div>Chargement des articles...</div>;
  }

  return (
      <div className="App">
        <h1>Mes Articles</h1>
        <ul>
          {articles.map((article) => (
              <li key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import Articles from './Article';  // Importation du composant

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mon Blog Strapi</h1>
                <Articles />  {/* Affichage des articles */}
            </header>
        </div>
    );
}

export default App;

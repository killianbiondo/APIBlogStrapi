import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importer un fichier CSS pour styliser la page de connexion

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Ajoutez ici une logique pour vérifier les informations de connexion (par exemple via une API)
        // Pour l'instant, on redirige simplement vers la page du blog
        if (username && password) {
            navigate('/blog');
        } else {
            alert('Veuillez entrer un nom d’utilisateur et un mot de passe valides.');
        }
    };

    return (
        <div className="login-container">
            <h2>Connexion au Blog de football</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Nom d’utilisateur :</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Mot de passe :</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;

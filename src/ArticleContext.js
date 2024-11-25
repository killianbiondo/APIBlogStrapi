import React, { useState, createContext } from 'react';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    const addArticle = (title, content, author) => {
        const newArticle = { title, content, author };
        setArticles([newArticle, ...articles]);
    };

    return (
        <ArticleContext.Provider value={{ articles, addArticle }}>
            {children}
        </ArticleContext.Provider>
    );
};

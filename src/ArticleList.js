import React, { useContext } from 'react';
import { ArticleContext } from './ArticleContext';
import Article from './Article';

const ArticleList = () => {
    const { articles } = useContext(ArticleContext);

    return (
        <div>
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <Article
                        key={index}
                        title={article.title}
                        content={article.content}
                        author={article.author}
                    />
                ))
            ) : (
                <p>Aucun article pour le moment.</p>
            )}
        </div>
    );
};

export default ArticleList;

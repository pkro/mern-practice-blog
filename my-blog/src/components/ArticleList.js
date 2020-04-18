import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <Link to={`/article/${article.name}`}>
              <h3>{article.name}</h3>
              <p>{article.content[0].substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

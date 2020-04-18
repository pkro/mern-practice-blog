import React from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';
import NotFound from './NotFound';

const Article = ({ match }) => {
  const { name } = match.params;
  const article = articleContent.find((element) => element.name === name);

  return article ? (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <h3>Related articles:</h3>
      <ArticleList
        articles={articleContent.filter((article) => article.name !== name)}
      />
    </>
  ) : (
    <NotFound />
  );
};

export default Article;

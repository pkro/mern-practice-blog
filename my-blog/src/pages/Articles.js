import React from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';

const Articles = () => {
  return (
    <>
      <h1>List of articles</h1>
      <ArticleList articles={articleContent} />
    </>
  );
};

export default Articles;

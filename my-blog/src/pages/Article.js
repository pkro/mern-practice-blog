import React from 'react';

const Article = ({ match }) => {
  return <div>Article {match.params.id}</div>;
};

export default Article;

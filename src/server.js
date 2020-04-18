import express from 'express';
import bodyParser from 'body-parser';
import articles from './article-content';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

const articlesInfo = {
  'yay-article': {
    upvotes: 0,
  },
  'yay-article2': {
    upvotes: 0,
  },
};
app.get('/api/articles/:name', (req, res) => {
  res.send(articles.find((article) => article.name === req.params.name));
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  if (articleName in articlesInfo) {
    articlesInfo[articleName].upvotes++;
    return res
      .status(200)
      .json({ [articleName]: articlesInfo[articleName].upvotes });
  }
  return res.status(404).send('Article not found');
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

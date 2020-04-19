import express from 'express';
import bodyParser from 'body-parser';
import articles from './article-content';
import connectDB from '../config/db';
import User from '../models/User';
import Article from '../models/Article';

connectDB();

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req, res) => {
  const articleName = req.params.name;
  const article = await Article.find({ name: articleName });
  res.status(200).send(article);
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  if (articleName in articlesInfo) {
    articlesInfo[articleName].upvotes++;
    return res.status(200).send(articlesInfo[articleName]);
  }
  return res.status(404).send('Article not found');
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const { username, text } = req.body;

  if (articleName in articlesInfo) {
    articlesInfo[articleName].comments.unshift({
      username,
      text,
    });
    return res.status(200).send(articlesInfo[articleName]);
  }
  return res.status(404).send('Article not found');
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

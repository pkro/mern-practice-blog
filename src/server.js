import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`you sent ${req.body.key}`);
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

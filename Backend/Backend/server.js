import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      content: "this is a joke"
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      content: "this is a joke"
    },
    {
      id: 3,
      joke: "Why don't skeletons fight each other? They don't have the guts.",
      content: "this is a joke"
    },
    {
      id: 4,
      joke: "What do you call fake spaghetti? An impasta!",
      content: "this is a joke"
    },
    {
      id: 5,
      joke: "Why did the bicycle fall over? Because it was two-tired!",
      content: "this is a joke"
    }
  ];

  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SERVER AT http://localhost:${port}`);
});

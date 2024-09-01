import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello football vision server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

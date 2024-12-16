const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDatabase = require('./db/Database');

dotenv.config({
  path: 'config/.env'
});

console.log('PORT:', process.env.PORT)

const PORT = process.env.PORT || 8000;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
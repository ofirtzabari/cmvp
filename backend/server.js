const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDatabase = require('./db/Database');
const ErrorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');

// Middleware
app.use(ErrorHandler);
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

// Setting up config file
dotenv.config({
  path: 'config/.env'
});

// Connecting to database
connectDatabase();

// Setting up config file
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('backend server is running');
});
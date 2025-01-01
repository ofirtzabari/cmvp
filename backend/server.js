const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDatabase = require('./db/Database');
const ErrorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const cors = require('cors');

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(ErrorHandler);
app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyparser.urlencoded({extended: true}));

// Routes
const user = require('./controller/user');
app.use("/api/v2/user", user);


// Setting up config file
dotenv.config({
  path: 'config/.env'
});

// Connecting to database
connectDatabase();

// Setting up config file
const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('backend server is running');
});
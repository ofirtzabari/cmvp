const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: 'config/.env'
  });

console.log('MONGO_URL:', process.env.DB_URL);

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  })
}

module.exports = connectDatabase;
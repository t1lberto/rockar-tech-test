require('dotenv').config();
const Client = require("pg").Pool;

// Connect to database
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

client.connect();

export default client;
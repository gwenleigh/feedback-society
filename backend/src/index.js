require('dotenv').config(); 

const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

  // PostgreSQL connection setup
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PORT);

// Sample route
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log({error: err.message})
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

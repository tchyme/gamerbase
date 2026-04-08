const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'GamerBase is alive 🎮' });
});

// Get all players
app.get('/players', async (req, res) => {
  const result = await pool.query('SELECT * FROM players ORDER BY score DESC');
  res.json(result.rows);
});

// Register a player
app.post('/players', async (req, res) => {
  const { username, game, score } = req.body;
  const result = await pool.query(
    'INSERT INTO players (username, game, score) VALUES ($1, $2, $3) RETURNING *',
    [username, game, score]
  );
  res.status(201).json(result.rows[0]);
});

app.listen(3000, () => console.log('GamerBase running on port 3000'));

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const connectionString = process.env.NEON_DATABASE_URL;
if (!connectionString) {
  console.error('NEON_DATABASE_URL not set in environment');
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS device_data (
      id SERIAL PRIMARY KEY,
      resource TEXT NOT NULL,
      payload JSONB NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
  `);
}

const allowedResources = ['camera', 'gps', 'network'];

app.post('/:resource', async (req, res) => {
  const { resource } = req.params;
  if (!allowedResources.includes(resource)) return res.status(400).json({ error: 'Unknown resource' });
  const payload = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO device_data (resource, payload) VALUES ($1, $2) RETURNING id, created_at',
      [resource, payload]
    );
    res.status(201).json({ id: result.rows[0].id, created_at: result.rows[0].created_at });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db_error' });
  }
});

app.get('/:resource', async (req, res) => {
  const { resource } = req.params;
  if (!allowedResources.includes(resource)) return res.status(400).json({ error: 'Unknown resource' });
  const limit = parseInt(req.query.limit, 10) || 100;
  try {
    const result = await pool.query(
      'SELECT id, payload, created_at FROM device_data WHERE resource = $1 ORDER BY created_at DESC LIMIT $2',
      [resource, limit]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'db_error' });
  }
});

app.get('/', (req, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 3000;

initDb()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('Failed to initialize DB', err);
    process.exit(1);
  });

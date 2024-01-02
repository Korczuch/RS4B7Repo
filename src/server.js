const express = require('express');
const db = require('./database'); // Make sure this path points to your database.js file
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// This is your endpoint that handles POST requests to add a car to the database
app.post('/api/cars', async (req, res) => {
  const { VIN, CarType, ExteriorColor, InteriorColor, Ceramics, Registration, CountryCurrent, CountryOrigin, AudiExclusiveInterior, AudiExclusiveExterior } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO Car (VIN, CarType, ExteriorColor, InteriorColor, Ceramics, Registration, CountryCurrent, CountryOrigin, AudiExclusiveInterior, AudiExclusiveExterior)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [VIN, CarType, ExteriorColor, InteriorColor, Ceramics, Registration, CountryCurrent, CountryOrigin, AudiExclusiveInterior, AudiExclusiveExterior]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Choose a port to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/cars/:VIN', async (req, res) => {
    const { VIN } = req.params;
    try {
      const result = await db.query('SELECT * FROM Car WHERE VIN = $1', [VIN]);
      if (result.rows.length > 0) {
        res.json(result.rows[0]);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
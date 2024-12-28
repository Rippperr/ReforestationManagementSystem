const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/forest-growth', async (req, res) => {
  try {
    const { areaId } = req.query;
    const response = await axios.get(`https://satellite-api.example.com/forest-growth?area=${areaId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forest growth data' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

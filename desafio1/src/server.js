const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Maratona Full Cycle 2.0');
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}...`);
});

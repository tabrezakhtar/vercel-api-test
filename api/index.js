// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example API endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from your API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy database
let users = [
  { id: 1, name: 'Ahmed', email: 'ahmed@gmail.com' },
  { id: 2, name: 'Abbas', email: 'abbas@gmail.com' }
];

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

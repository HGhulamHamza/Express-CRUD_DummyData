import express from 'express'
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy database
let users = [
  { id: 1, name: 'Ahmed', email: 'ahmed@gmail.com' },
  { id: 2, name: 'Abbas', email: 'abbas@gmail.com' }
];


// GET request to fetch all users with a status code
app.get('/api/users', (req, res) => {
    res.status(200).json(users); // Return status code 200 with the array of users
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

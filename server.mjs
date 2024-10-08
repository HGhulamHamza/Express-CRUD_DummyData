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


// GET request to fetch all users with a status code of 200
app.get('/api/users', (req, res) => {
    res.status(200).json(users); // Return status code 200 with the array of users
  });

// POST request to add a user with a status code 
  app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  });

// PUT request with status codes to update a user with ID 
  app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
      users[index] = { id: userId, ...req.body };
      res.json(users[index]);
    } else {
      res.status(404).send('User not found');
  
    }
  });


// DELET request to delete a user form the array with status code 
  app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    
    if (index !== -1) {
      users.splice(index, 1);
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).send('User not found');
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

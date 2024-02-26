import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 3000; // Port number

// Define routes, middleware, etc.

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/s01')
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Define a MongoDB schema
const employeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  employeeId: Number,
  mobileNumber: String,
  email: String,
  password: String,
});

// Create a model based on the schema
const Employee = mongoose.model('Employee', employeeSchema);

// Define a route to fetch data
app.get('/api/employees', async (req, res) => {
  try {
    // Fetch data from MongoDB
    const employees = await Employee.find();
    // Send data as response
    res.json(employees);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (err) {
    console.error('Error retrieving employees:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

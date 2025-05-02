const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); 
const todoRoutes = require('./routes/todo');

dotenv.config();

const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const app = express();
app.use(express.json()); 


app.use('/api/auth', authRoutes); // เชื่อมต่อกับ auth.js
app.use('/api', todoRoutes); // ะชื่อมต่อกับ todo.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

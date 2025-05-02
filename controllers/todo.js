const axios = require('axios');
const Todo = require('../models/Todo');

// POST /todos : to store todolist
const createTodo = async (req, res) => {
  try {
    const { message, date } = req.body;
    const userId = req.user.id; 

    // using Axios for cat fact fetch API and store in Todo too !!
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;

    const newTodo = new Todo({
      userId,
      message,
      date,
      catFact
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating ToDo', error: error.message });
  }
};

// GET /todos - : Get todo for the authenticated user
const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;

    const userTodos = await Todo.find({ userId });

    res.json(userTodos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ToDos', error: error.message });
  }
};

module.exports = { createTodo, getTodos };

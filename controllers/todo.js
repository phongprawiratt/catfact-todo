const axios = require('axios');
const todos = require('../models/todo');

// POST /todos - สร้าง ToDo ใหม่
const createTodo = async (req, res) => {
  try {
    const { message, date } = req.body;
    const userId = req.user.id;

    // Fetch Cat Fact
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;

    const newTodo = {
      id: todos.length + 1,
      userId,
      message,
      date,
      catFact
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating ToDo', error: error.message });
  }
};

// GET /todos - ดึงข้อมูล ToDo ของผู้ใช้
const getTodos = (req, res) => {
  const userId = req.user.id;
  const userTodos = todos.filter(todo => todo.userId === userId);
  res.json(userTodos);
};

module.exports = { createTodo, getTodos };

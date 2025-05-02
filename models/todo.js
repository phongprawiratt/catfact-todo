const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  message: { type: String, required: true },
  date: { type: Date, required: true },
  catFact: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
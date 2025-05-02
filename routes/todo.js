const express = require('express');
const router = express.Router(); 

const { createTodo, getTodos } = require('../controllers/todo');
const authenticate = require('../middleware/auth');

router.post('/todos', authenticate, createTodo);
router.get('/todos', authenticate, getTodos);

module.exports = router;

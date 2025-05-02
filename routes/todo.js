const express = require('express');
const { createTodo, getTodos } = require('../controllers/todo');
const authenticate = require('../middleware/auth');
const router = require('express').Router();

router.post('/todos', authenticate, createTodo);

router.get('/todos', authenticate, getTodos);

module.exports = router;

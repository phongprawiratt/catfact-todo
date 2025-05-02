const express = require('express');
const { createTodo, getTodos } = require('../controllers/todo');
const authenticate = require('../middleware/auth');
const router = require('express').Router();

// POST /todos - สร้าง ToDo
router.post('/todos', authenticate, createTodo);

// GET /todos - ดึงข้อมูล ToDo ของผู้ใช้
router.get('/todos', authenticate, getTodos);

module.exports = router;

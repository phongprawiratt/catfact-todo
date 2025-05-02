const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // เชื่อมต่อไฟล์ auth.js
const todoRoutes = require('./routes/todo'); // เชื่อมต่อไฟล์ todo.js

dotenv.config();

const app = express();
app.use(express.json()); // ใช้ JSON parser

// ตั้งค่า routes
app.use('/api/auth', authRoutes); // เส้นทาง /api/auth จะเชื่อมต่อกับ auth.js
app.use('/api', todoRoutes); // เส้นทาง /api จะเชื่อมต่อกับ todo.js

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

# 🐱 Cat Fact ToDo Tracker

A simple backend API built with **Node.js**, **Express**, and **MongoDB Atlas**, where users can 
- Register and log in securely
- Add ToDo items with a message and a date
- On creation, the app fetches the cat fact and stores it alongside the item
- View all their ToDo items (with stored cat fact)

📍 GitHub Repository: [github.com/phongprawiratt/catfact-todo](https://github.com/phongprawiratt/catfact-todo)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/phongprawiratt/catfact-todo.git
cd catfact-todo

### 2. Install dependencies
npm install

### 3. Create .env file
Copy the provided .env.example and create a new .env file:

MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=3000

🔒 Note: The actual .env file is excluded from the repository for security reasons.
The required environment variable values will be provided via email for testing purposes !!

### 4. Run the server
npx nodemon index.js

### 5. Testing
You can test all API endpoints using the test.rest file provided in this repo.
Make sure to install the REST Client extension for VS Code, then open and run requests directly from the test.rest file.

## 🔌 API Endpoints

### 🔐 Authentication

| Method | Endpoint              | Description        |
|--------|-----------------------|--------------------|
| POST   | `/api/auth/register`   | Register a new user |
| POST   | `/api/auth/login`      | Log in and get token|

### 📝 ToDos (requires JWT)

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| POST   | `/api/todos` | Create new ToDo   |
| GET    | `/api/todos` | List user's ToDos |

> Include the JWT token in the `Authorization` header as:  
> `Bearer YOUR_TOKEN_HERE`


! 🤖 Assistance Acknowledgment !
This project was built as part of a Junior Backend Developer test.

I used ChatGPT to help study and better understand certain parts of the project that I hadn’t worked with before or was facing difficulties with, specifically:

JWT-based authentication,Password hashing with bcrypt,Integration with MongoDB Atlas

Thanks to AI tools, I was able to overcome technical blockers and learn more effectively throughout the development process



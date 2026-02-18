
# 🔐 Secure Notes App

A full-stack Secure Notes application built using **React (Vite)**, **Node.js**, **Express**, and **MongoDB**.

This application allows users to securely register, login, and manage personal notes with JWT authentication and client-side AES encryption.

---

# 🚀 Tech Stack

Frontend:
- React (Vite)
- React Router DOM
- Context API
- Axios
- Tailwind CSS
- CryptoJS (AES Encryption)
- Lucide React Icons

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- nodemon

---

# ✨ Features

- User Registration & Login
- JWT-based Authentication
- Protected Dashboard Route
- Add Notes
- Delete Notes
- Debounced Search (300ms delay)
- Client-side AES Encryption for Notes
- Optimistic UI Updates
- Loading State Handling
- Proper Error Handling
- Clean Modular Folder Structure

---

# 📂 Project Structure

Secure-Notes-App/

backend/  
    middleware/  
    models/  
    routes/  
    .env  
    index.js  
    package.json  

frontend/  
    src/  
    vite.config.js  
    package.json  

README.md  

---

# 🛠 Installation & Setup Instructions

## 1️⃣ Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_LINK  
cd Secure-Notes-App  

---

# 🔹 Backend Setup

Step 1: Navigate to backend

cd backend  

Step 2: Install dependencies

npm install  

Step 3: Create a .env file inside backend folder

PORT=4000  
MONGODB_URI=mongodb://localhost:27017/secure-notes-app  
JWT_SECRET=your_jwt_secret_here  

Step 4: Ensure MongoDB is running locally.

Step 5: Start Backend Server

npm run dev  

Backend will run at:

http://localhost:4000  

---

# 🔹 Frontend Setup

Open a new terminal.

Step 1: Navigate to frontend

cd frontend  

Step 2: Install dependencies

npm install  

Step 3: Start frontend

npm run dev  

Frontend will run at:

http://localhost:5173  

---

# 🔐 Authentication Flow

1. User registers with email and password.  
2. Password is hashed using bcrypt before storing in the database.  
3. On login, a JWT token is generated.  
4. Token is stored in localStorage on the client.  
5. Protected routes validate the token using backend middleware.  

If the token is invalid, expired, tampered, or the user is deleted from the database, the frontend automatically redirects the user back to the login page.

---

# 🔒 Encryption Flow

- Notes are encrypted on the client using AES (CryptoJS).  
- Encrypted notes are sent to the backend.  
- Backend stores encrypted content in MongoDB.  
- Notes are decrypted only on the frontend for display.  

This ensures the server never sees plaintext note content.

---

# 🔍 Search Implementation

- Debounced search with 300ms delay  
- Case-insensitive filtering  
- Client-side filtering of decrypted notes  
- Optimized using useMemo  

---

# 📦 Available Scripts

Backend:

npm run dev  → Start backend using nodemon  
npm start    → Start backend normally  

Frontend:

npm run dev      → Start Vite development server  
npm run build    → Create production build  
npm run preview  → Preview production build  

---

# ⚠️ Important Notes

- MongoDB must be running locally.
- The JWT secret should be strong in production.
- The .env file should not be committed to version control.
- Encryption secrets should not be exposed in production environments.

---

# 📌 Future Improvements

- Edit Note functionality
- Toast notifications
- Pagination
- Refresh token implementation
- Production deployment configuration
- Unit and integration testing

---

# 👨‍💻 Author

Ankush Sheoran  

---

# 📜 License

This project was developed as part of an assignment for the Associate Software Engineer (React) role.

# 🤖 Real-Time AI Chatbot using Socket.io & Gemini AI

This project is a **Real-Time AI Chatbot** built with **Socket.io** for real-time communication and **Gemini AI** for generating intelligent responses.  
It demonstrates how **WebSockets** enable dynamic, two-way communication and how **short-term memory** can be implemented for chat context.

---

## 🚀 Features
- ⚡ Real-time, bidirectional communication using **Socket.io**
- 🧠 **Short-term memory** implementation with arrays to preserve recent chat history
- 🤖 Integration with **Gemini AI** for natural, intelligent chatbot responses
- 🔗 Lightweight and extensible codebase for experimentation and learning

---

## 📚 Tech Stack
- **Frontend:** React (or HTML/CSS/JS)
- **Backend:** Node.js + Express
- **Real-Time Communication:** Socket.io (WebSockets)
- **AI Integration:** Gemini AI API
- **Memory:** Custom short-term memory (array-based)

---

## 💡 How It Works

1. Client connects to the server using WebSockets via Socket.io.
2. Messages are exchanged in real-time without page reloads.
3. A simple array-based short-term memory stores recent chat history.
4. Messages are sent to Gemini AI, which generates intelligent responses.
5. The AI responses are broadcast back to the client instantly.


---

## 🔮 Future Improvements

🗂️ Persistent memory with a database (MongoDB/Redis)

🔐 User authentication for personalized experiences

👥 Multi-user support (chat rooms or group chats)

💬 Conversation history UI with timestamps

🌐 Deployment on cloud platforms (e.g., Render, Vercel, or Railway)



---
## 🌟 Acknowledgements

Socket.io → for real-time, event-based communication

Gemini AI → for powering intelligent responses

Node.js → for backend runtime

Express → for handling routes and middleware

---

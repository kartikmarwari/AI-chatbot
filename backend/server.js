 
require(`dotenv`).config();
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = require("./src/app"); // Import app.js
const generateResponse = require("./src/service/ai.service")
 
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: "http://localhost:5173",
    
  } });

const chatHistory = [
  
]
 
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });



  socket.on("aimsg", async (data) => {
console.log("msg recived ", data);
    chatHistory.push({ role: "user", parts: [{ text: data }] });
    
    const response = await generateResponse(chatHistory);
     chatHistory.push({ role: "model", parts: [{ text: response }] });
    socket.emit("aimsgres", response)


  });
 
});

 
httpServer.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});

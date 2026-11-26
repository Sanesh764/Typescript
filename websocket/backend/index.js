import express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import cors from "cors";

const app=express();
app.use(cors());
const httpServer=createServer(app);
const io=new Server(httpServer,{
    cors:{
        origin:"http://localhost:5173"
    }
});
io.on("connection",(socket)=>{
    console.log("user connected successfully :",socket.id);
    
});
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log("Message received:", data);
    
    io.emit("receive_message", data);
  });
});

io.on("disconnect",(socket)=>{
    console.log("user disconnected successfully :",socket.id);
    
});

app.get('/',(req,res)=>{
    res.send("server is working");
})

httpServer.listen(3000,()=>{
    console.log("server is listening on port 3000");
    
})
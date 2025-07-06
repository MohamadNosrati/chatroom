import app from "./index";
import mongoose from "mongoose";
import { Server } from "socket.io";

mongoose
  .connect(process.env.DATABASE as string)
  .then(() => {
    console.log(`connected to  ${process.env.DATABASE}`);
  })
  .catch((error) => {
    console.log(error);
  });

const httpServer = app.listen(process.env.PORT, () => {
  console.log(`app listening on port  ${process.env.PORT}`);
});

const io = new Server(httpServer,{
  cors:{
    origin:"*"
  }
});

io.on("connection", (socket) => {
  console.log("socket connection");
  socket.on("join",(payload)=>{
    console.log("payload:",payload)
  })
  io.on("send-message",()=>{
    io.send("a send-message event came from postman!")
  })
  io.on("disconnect",()=>{
    console.log("socket disconnect!")
  })
});

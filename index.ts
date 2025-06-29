import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./src/users/userRoutes";

dotenv.config({
    path:"./config.env"
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.use("/users",userRouter);



export default app;
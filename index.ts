import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./src/users/userRoutes";
import AppError from "./src/llb/tools/appError";

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.all("/{*any}", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 404,
    message: `here is no route with ${req.url} url`,
  });
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 500;
  err.message = err.message || "server error!"  
  res.status(err.status).json({
    status: err.status,
    message: err.message,
  });
});

export default app;

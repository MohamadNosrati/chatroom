import { NextFunction, Request, Response } from "express";

type fn = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const catchAsync = (fn: fn) => {
  return (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((error) => next(error));
};

export default catchAsync;

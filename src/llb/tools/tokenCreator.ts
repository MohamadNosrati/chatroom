import jwt, { Secret } from "jsonwebtoken";
import mongoose from "mongoose";
const tokenCreator = async (id: mongoose.Types.ObjectId) => {
  console.log(process.env.TOKENEPIRESIN)
  const token = await jwt.sign(
    {
      id: id,
    },
    process.env.SECRETTOKEN as Secret,
    {
        expiresIn:process.env.TOKENEPIRESIN as any
    }
  );
  return token;
};

export default tokenCreator;

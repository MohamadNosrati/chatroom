import app from "./index";
import mongoose from "mongoose";

mongoose
  .connect(process.env.DATABASE as string)
  .then(() => {
    console.log(`connected to  ${process.env.DATABASE}`);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log(`app listening on port  ${process.env.PORT}`);
});

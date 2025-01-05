import express from "express";
import dbConnect from "./DB/dbconnect.js";
import cors from "cors";
import routes from "./routes/route.js";

const app = express();

app.use(cors());

dbConnect();

app.use(express.json());

app.use(express.urlencoded());

app.use("/", routes);

app.listen(1234, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port 1234");
});

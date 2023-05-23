import express from "express";
import mainRoute from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = parseInt(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRoute);

app.listen(port, () => console.log(`running on localhost: ${port}`));

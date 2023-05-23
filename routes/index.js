import express from "express";
import userRouter from "./UserRoutes.js";

const route = express.Router();

route.use("/users", userRouter);

export default route;

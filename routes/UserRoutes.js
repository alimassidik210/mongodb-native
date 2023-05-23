import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from "../controlers/UserController.js";

const route = express.Router();

route.get("/", getUsers);
route.get("/:id", getUsersById);
route.post("/", createUser);
route.patch("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;

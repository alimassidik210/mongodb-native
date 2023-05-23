import { ObjectId } from "mongodb";
import dbMahasiswa from "../config/mongodb.js";

const collection = dbMahasiswa.collection("mahasiswa");

export const getUsers = async (req, res, next) => {
  try {
    const response = await collection.find().toArray();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getUsersById = async (req, res, next) => {
  try {
    const response = await collection
      .find({ _id: new ObjectId(req.params.id) })
      .toArray();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res, next) => {
  try {
    await collection.insertOne(req.body);
    return res.status(201).json({ msg: "users added" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      {
        $set: {
          ...req.body,
        },
      }
    );
    return res.status(200).json({ msg: "users updated" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "users deleted", data: result });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

import { MongoClient } from "mongodb";
import { uri } from "./uri.js";

// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("darcik");
    const collection = database.collection("mahasiswa");
    // create a document to insert
    const doc = {
      nama: "kenzie",
      email: "kenzie@gmail.com",
    };
    const result = await collection.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

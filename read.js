import { MongoClient } from "mongodb";
import { uri } from "./uri.js";

// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("darcik");
    const collection = database.collection("mahasiswa");
    // create a document to insert

    const findResult = await collection.find();

    for await (const doc of findResult) {
      console.log(doc.nama);
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

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
      nama: "ziva",
    };
    const result = await collection.deleteOne(doc);

    console.log(`A document was deleted with the _id: ${result}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

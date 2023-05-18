import { MongoClient } from "mongodb";
import { uri } from "./uri.js";

// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("darcik");
    const collection = database.collection("mahasiswa");

    // create a filter for a movie to update
    const filter = { nama: "ziva" };

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        nama: "ziva upadated",
      },
    };

    const result = await collection.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

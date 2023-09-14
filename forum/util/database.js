import exp from "constants";
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://ansj8777:8h6L9BJO9xTgOYlL@cluster0.aoy4j9w.mongodb.net/forum?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
};

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };

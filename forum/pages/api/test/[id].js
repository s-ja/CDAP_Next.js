import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  // console.log(request.query);
  if (request.method == "DELETE") {
    try {
      const db = (await connectDB).db("forum");
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.query) });
      return response.status(200).send("Deleted");
    } catch (error) {
      return response.status(500).send("Server Error");
    }
  }
  return response.status(405).end();
}

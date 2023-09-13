import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "DELETE") {
    try {
      const db = (await connectDB).db("forum");
      const result = db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.query) });
      if (result.deletedCount === 0) {
        return response.status(404).send("No post found to delete");
      }
      return response.status(200).send("Post deleted successfully"); // JSON response 대신 text response 사용
      // response.status(200).json("completed");
      // response.status(200).redirect("/list");
    } catch (error) {
      return response.status(500).send("Internal Server Error"); // JSON response 대신 text response 사용
    }
  }
  return response.status(405).end();
}

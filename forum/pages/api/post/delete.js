import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    try {
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body) });
      return response.status(200).json({ message: "deleted" });
    } catch (error) {
      return response.status(500).send("Internal Server Error"); // JSON response 대신 text response 사용
    }
  }
}

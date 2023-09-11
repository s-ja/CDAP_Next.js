import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "POST") {
    try {
      let editted = {
        title: request.body.title,
        content: request.body.content,
      };
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(request.body._id) }, { $set: editted });
      response.redirect(302, "/list");
    } catch (error) {
      console.log(error);
      response.status(500).send("Internal Server Error");
    }
  }
}

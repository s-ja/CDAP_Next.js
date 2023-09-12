import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    try {
      const db = (await connectDB).db("forum");
      let result = db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body._id) });
      return response.redirect(302, "/list");
      // response.status(200).json("completed");
      // response.status(200).redirect("/list");
    } catch (error) {
      return response.status(500).json("server error");
    }
  }
}

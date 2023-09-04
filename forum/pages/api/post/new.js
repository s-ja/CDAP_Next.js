import { connectDB } from "@/util/database";
// import { redirect } from "next/navigation";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.title == "") {
      return response.status(500).json("empty title");
    } else if (request.body.content == "") {
      return response.status(500).json("empty content");
    } else {
      try {
        const db = (await connectDB).db("forum");
        let result = db.collection("post").insertOne(request.body);
        return response.redirect(302, "/list");
        // response.status(200).json("completed");
        // response.status(200).redirect("/list");
      } catch (error) {
        return response.status(500).json("server error");
      }
    }
  }
}

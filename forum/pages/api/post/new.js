import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
// import { redirect } from "next/navigation";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  // console.log(session.user.email);

  if (session) {
    request.body.author = session.user.email;
  }

  // console.log(request.body);

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

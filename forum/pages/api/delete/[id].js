import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  // console.log(request);
  if (request.method == "DELETE") {
    // console.log(request.query, request.body);
    let session = await getSession({ req: request });
    // console.log(session);
    try {
      const db = (await connectDB).db("forum");
      const { author } = request.body;
      let post = await db
        .collection("post")
        .findOne({ _id: new ObjectId(request.query.id) });

      if (session.user.isAdmin || post.author === session.user.email) {
        const result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(request.query.id) });
        return response.status(200).send("Deleted");
      } else {
        throw new Error("FORBIDDEN");
      }
    } catch (error) {
      if (error.message === "FORBIDDEN") {
        return response
          .status(403)
          .json({ message: "Forbidden: You are not the author of this post" });
      }
      return response
        .status(500)
        .json({ message: "Server Error", error: error.message });
    }

    return response.status(405).end();
  }
}

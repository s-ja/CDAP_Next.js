import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  // console.log(request);
  if (request.method == "DELETE") {
    // console.log(request.query, request.body);
    let session = await getServerSession(request, response, authOptions);
    try {
      const db = (await connectDB).db("forum");
      const { author } = JSON.parse(request.body);
      let post = await db
        .collection("post")
        .findOne({ _id: new ObjectId(request.query.id) });

      if (!post.author || post.author == session.user.email) {
        const result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(request.query.id) });
        return response.status(200).send("Deleted");
      } else {
        return response
          .status(403)
          .json({ message: "Forbidden: You are not the author of this post" });
        // return response
        //   .status(500)
        //   .json({ message: "현재유저와 작성자 불일치" });
      }
    } catch (error) {
      return response.status(500).json({ message: "Server Error" });
    }
  }
  return response.status(405).end();
}

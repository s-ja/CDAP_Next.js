import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  console.log(request.body);
  if (request.method == "POST") {
    if (request.body.name == "") {
      response.status(500).json("empty name");
    } else if (request.body.email == "") {
      response.status(500).json("empty email");
    } else if (request.body.password == "") {
      response.status(500).json("empty password");
    }
    let hash = await bcrypt.hash(request.body.password, 10);
    request.body.password = hash;

    let db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(request.body);
    response.status(200).json("registered");
  }
}

import { connectDB } from "@/util/database";
import { ObjectId } from "bson";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // console.log(props);

  if (result === null) {
    return notFound();
    // <div>404 : page doesn't exist</div>;
  }

  return (
    <div>
      <h4>post detail</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <hr />

      <Comment _id={result._id.toString()} />
    </div>
  );
}

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  //   console.log(props);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);

  await db
    .collection("post")
    .updateOne({ _id: new ObjectId(props.params.id) }, { $set: {title : } });

  return (
    <div className="p-20">
      <h4>edit post</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

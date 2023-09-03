import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // console.log(result);

  return (
    <div className="list_bg">
      {result.map((a, i) => {
        return (
          <div className="list_item">
            <h4>{a.title}</h4>
            <p>{a.content}</p>
          </div>
        );
      })}
    </div>
  );
}

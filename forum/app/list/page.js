import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // console.log(result[0]._id);

  return (
    <div className="list_bg">
      {result.map((a, i) => {
        console.log(Object.keys(a._id));
        const idString = a._id.toString(); // ObjectId를 문자열로 변환
        return (
          <Link href={`/detail/${idString}`}>
            <div className="list_item" key={i}>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

import { connectDB } from "@/util/database";
import Link from "next/link";

import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // console.log(result[0]._id);

  return (
    <div className="list_bg">
      {result.map((a, i) => {
        const idString = a._id.toString();
        return (
          <Link prefetch={false} href={`/detail/${idString}`}>
            <div className="list_item" key={i}>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
            </div>
          </Link>
        );
      })}
      <DetailLink />
    </div>
  );
}

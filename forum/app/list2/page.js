import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

import DetailLink from "./DetailLink";

// export const dynamic = "force-dynamic";

export const revalidate = 20;

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // console.log(result[0]._id);

  return (
    <div className="list_bg">
      <ListItem result={result} />
      <DetailLink />
    </div>
  );
}

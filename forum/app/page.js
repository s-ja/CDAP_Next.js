import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  console.log(result);

  return (
    <div>
      <h1>forum</h1>
    </div>
  );
}

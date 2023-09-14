import { connectDB } from "@/util/database";

export const revalidate = 60;

export default async function Home() {
  // const client = await connectDB;

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // await fetch("", { cache: "force-cache" });
  // await fetch("", { cache: "no-store" });

  // await fetch("", { next: { revalidate: 60 } });

  console.log(result);

  return (
    <div>
      <h1>forum</h1>
    </div>
  );
}

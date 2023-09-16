import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    return <div>Please log in</div>;
  } else {
    return (
      <div className="p-20">
        <h4>write post</h4>
        <form action="/api/post/new" method="POST">
          <input type="text" name="title" placeholder="post title" />
          <input type="text" name="content" placeholder="post content" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   console.log("Session:", session);

//   return {
//     props: { session },
//   };
// }

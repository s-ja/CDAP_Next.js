import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "6dd67e8e4a748a911737",
      clientSecret: "953ddd7ccdc95865726e00acee65e648e8c3906d",
    }),
  ],
  secret: "qwer1234",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);

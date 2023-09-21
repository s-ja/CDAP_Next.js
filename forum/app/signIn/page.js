"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false, // 페이지 리디렉션을 방지
      email,
      password,
    });

    if (!response.ok) {
      setError("로그인에 실패했습니다. 이메일 혹은 비밀번호를 확인해주세요.");
    } else {
      window.location.href = "/"; // 로그인 성공 후 메인 페이지로 리다이렉트
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

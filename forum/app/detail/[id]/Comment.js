"use client";

import { useState } from "react";

export default function Comment() {
  let [comment, setComment] = useState("");

  return (
    <div>
      <div>comment list</div>
      <input
        type="text"
        placeholder="comment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/URL", { method: "POST", body: comment });
        }}
      >
        send
      </button>
    </div>
  );
}

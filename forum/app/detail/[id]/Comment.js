"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <p>comment list</p>
      <ul>
        {data.length > 0
          ? data.map((a, i) => {
              return (
                <li key={i}>
                  <span>{a.content}</span>
                  <p>{a.author}</p>
                </li>
              );
            })
          : "no comment..."}
      </ul>
      <input
        type="text"
        placeholder="comment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          });
        }}
      >
        send
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        const idString = a._id.toString();
        return (
          <div className="list_item" key={i}>
            <Link prefetch={false} href={`/detail/${idString}`}>
              <h4>{a.title}</h4>
            </Link>
            <p>{a.content}</p>
            <Link href={`/edit/${result[i]._id}`}>✏️edit</Link>
            <span
              onClick={() => {
                fetch(`/api/post/delete/${idString}`, {
                  method: "DELETE",
                }).then(() => {
                  console.log("deleted");
                  window.location.reload();
                });
              }}
            >
              🗑️
            </span>
          </div>
        );
      })}
    </div>
  );
}

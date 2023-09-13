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
                fetch("/api/post/delete", {
                  method: "POST",
                  body: result[i]._id,
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      //서버가 에러코드전송시 실행할코드
                    }
                  })
                  .then((r) => {
                    // window.location.reload();
                    console.log(r);
                  })
                  .catch((error) => {
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error);
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

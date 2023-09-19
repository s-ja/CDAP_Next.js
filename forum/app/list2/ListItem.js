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
            <Link href={`/edit/${result[i]._id}`}>✏️ edit</Link>
            <span
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: result[i]._id,
                // })
                //   .then((r) => {
                //     if (r.status == 200) {
                //       return r.json();
                //     } else {
                //       //서버가 에러코드전송시 실행할코드
                //     }
                //   })
                //   .then((r) => {
                //     // window.location.reload();
                //     // console.log(r);
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = "none";
                //     }, 1000);
                //   })
                //   .catch((error) => {
                //     //인터넷문제 등으로 실패시 실행할코드
                //     console.log(error);
                //   });
                // fetch("/api/test?name=asj&age=29");
                // fetch("/api/test/123");
                fetch(`/api/delete/${idString}`, { method: "DELETE" })
                  .then((r) => {
                    if (r.ok) {
                      return r.text();
                    } else {
                      throw new Error("Error");
                    }
                  })
                  .then((r) => {
                    console.log(r);
                    window.location.reload();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              🗑️ delete
            </span>
          </div>
        );
      })}
    </div>
  );
}

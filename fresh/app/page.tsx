export default function Home() {
  let name = "asj";
  let age = 20;
  let repositery = "https://github.com/s-ja/CDAP_Next.js";
  return (
    <div>
      <h4 className="title">apple fresh</h4>
      <p className="title_sub">
        by dev {name} {age}
      </p>
      <a
        href={repositery}
        style={{
          display: "block",
          textAlign: "center",
          color: "darkred",
          textTransform: "capitalize",
        }}
      >
        repositery link
      </a>
    </div>
  );
}

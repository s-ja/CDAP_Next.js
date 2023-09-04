export default function Write() {
  return (
    <div>
      <h4>write post</h4>
      <form action="/api/test" method="POST">
        <input type="text" name="title" />
        <input type="text" name="content" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

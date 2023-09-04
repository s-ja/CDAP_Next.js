export default function Write() {
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

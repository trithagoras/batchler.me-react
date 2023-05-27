import PostIndex from "../components/PostIndex";
import posts from "../metadata";

function ListPosts() {
  return (
    <ul>
      {posts
        .sort((a, b) => (a.date <= b.date ? 1 : -1))
        .map((p) => (
          <li key={p.urlId}>
            <PostIndex post={p} />
          </li>
        ))}
    </ul>
  );
}

export default ListPosts;

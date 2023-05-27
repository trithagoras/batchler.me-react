import { useEffect } from "react";
import PostEntry from "../components/PostEntry";
import posts from "../metadata";

function ListPosts() {
  useEffect(() => {
    document.title = "Posts | batchler.me";
  }, []);
  return (
    <ul>
      {posts
        .sort((a, b) => (a.date <= b.date ? 1 : -1))
        .map((p) => (
          <li className="post-entry" key={p.urlId}>
            <PostEntry post={p} />
          </li>
        ))}
    </ul>
  );
}

export default ListPosts;

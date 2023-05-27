import PostModel from "../models/post";
import { Link } from "react-router-dom";
import "../styles/post.css";

function PostIndex({ post }: { post: PostModel }) {
  return (
    <div>
      <span>{post.date.toDateString()}</span>
      <h2 className="h3">
        <Link to={post.urlId}>{post.title}</Link>
      </h2>
    </div>
  );
}

export default PostIndex;

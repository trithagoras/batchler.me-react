import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import NotFound from "../../shared/pages/NotFound";
import PostModel from "../models/post";
import posts from "../metadata";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

function Post() {
  const { urlId } = useParams();
  const [content, setContent] = useState<string>();
  const [err, setErr] = useState(false);
  const [metadata, setMetadata] = useState<PostModel>();

  useEffect(() => {
    const readFile = () => {
      import(`../content/${urlId}.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setContent(res))
            .catch(() => setErr(true));
        })
        .catch(() => setErr(true));
    };
    const getMetaData = () => {
      const p = posts.find((p) => p.urlId === urlId);
      if (p === null) {
        setErr(true);
        return;
      }
      setMetadata(p);
    };
    readFile();
    getMetaData();
  }, [urlId]);

  if (err) {
    return <NotFound />;
  }

  if (content === undefined) {
    return <Spinner />;
  }

  return (
    <div>
      <span>{metadata?.date.toDateString()}</span>
      <h1 className="page-title">{metadata?.title}</h1>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}

export default Post;

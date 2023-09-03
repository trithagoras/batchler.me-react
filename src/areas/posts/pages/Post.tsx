import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import NotFound from "../../shared/pages/NotFound";
import posts from "../metadata";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import { PostStore } from "../stores/PostStore";
import { useStore } from "../../shared/hooks";
import { observer } from "mobx-react-lite";

function Post() {
    const { urlId } = useParams();
    const postStore = useStore(PostStore);

    useEffect(() => {
        postStore.fetchMetadata(urlId, posts);
        postStore.fetchContent(urlId);
        return () => postStore.reset(); // cleanup when unmounting
    }, [urlId, postStore]);

    useEffect(() => {
        if (postStore.metadata) {
            document.title = `${postStore.metadata.title} | batchler.me`;
        }
    }, [postStore.metadata]);

    if (postStore.error) {
        return <NotFound />;
    }

    if (!postStore.content) {
        return <Spinner />;
    }

    return (
        <div>
            <span>{postStore.metadata?.date.toDateString()}</span>
            <h1 className="page-title">{postStore.metadata?.title}</h1>
            <ReactMarkdown
              children={postStore.content}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeRaw, rehypeKatex]}
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

export default observer(Post);
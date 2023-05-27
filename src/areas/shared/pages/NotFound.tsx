import { useEffect } from "react";


function NotFound() {
    useEffect(() => {
        document.title = "Page Not Found | batchler.me";
      }, []);
    return (
        <div>
            <h1>Page not found</h1>
            <h2>404</h2>
            <p>oops! This page doesn't seem to exist.</p>
        </div>
    );
}

export default NotFound;
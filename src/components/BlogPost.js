import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

const BlogPost = () => {
  const { title } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/blogs/${title}.md`)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [title]);

  return (
    <div className="prose mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default BlogPost;

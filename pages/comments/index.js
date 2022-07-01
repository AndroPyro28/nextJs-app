import React, { useState } from "react";

function Index() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const data = await fetch("/api/comments").then((res) => res.json());
    setComments(data);
  };
  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.length > 0 &&
        comments.map((comment) => {
          return <div key={comment.id}> {comment.text} </div>;
        })}
    </div>
  );
}

export default Index;

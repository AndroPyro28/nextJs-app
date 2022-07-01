import React, { useState } from "react";

function Index() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  
  const fetchComments = async () => {
    const data = await fetch("/api/comments").then((res) => res.json());
    setComments(data);
  };

  const submitComment = async () => {
    const data = await fetch('/api/comments/', {
        method:'POST',
        body: JSON.stringify(commentInput),
        headers: {
        'Content-Type':'application/json'
        }
    }).then(res => res.json());

    console.log(data)
  }
  return (
    <div>
        <input type={"text"} value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />
        <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.length > 0 &&
        comments.map((comment) => {
          return <div key={comment.id}> {comment.text} </div>;
        })}
    </div>
  );
}

export default Index;

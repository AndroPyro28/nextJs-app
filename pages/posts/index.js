import React from "react";
import { useRouter } from "next/router";
function PostList({ posts }) {
  const router = useRouter();

  const handleNavigate = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post, index) => {
        return (
          <div key={post.id} onClick={() => handleNavigate(post.id)}>
            {post.id} {post.title}
          </div>
        );
      })}
    </div>
  );
}

export default PostList;



export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};

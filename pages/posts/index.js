import React from "react";
import Link from "next/link";
function PostList({ posts }) {
  const router = useRouter();

  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post, index) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <a>
              <div  onClick={() => handleNavigate(post.id)}>
                {post.id} {post.title}
              </div>
            </a>
          </Link>
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

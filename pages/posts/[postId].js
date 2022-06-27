import React from 'react'
function Post({post}) {
  return (
    <div>
      <h2>{post?.id} {post?.title}</h2>
      <h3>{post?.body}</h3>
      </div>
  )
}

export default Post;

export const getStaticPaths = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
  
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })
  return {
    // paths,
    paths: [
      {
        params: {
          postId: `1`
        }
      },
      {
        params: {
          postId: `2`
        }
      },
      {
        params: {
          postId: `3`
        }
      }
      
    ],
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const {params} = context;

  const {postId} = params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
  
  return {
    props: {
      post: data
    }
  }
}
import { useRouter } from 'next/router';
import React from 'react'
function Post({post}) {
  const router = useRouter();

  if(router.isFallback) {
    return <>loading...</>
  }
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
    fallback: true // if fallback is true then any paths that not returned from paths key in getStaticPaths will be request from the server to make api call and will fetch and added to the static folder
  }
}

export const getStaticProps = async (context) => {
  const {params} = context;

  const {postId} = params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
  
  if(!data.id) {
    return {
      notFound: true // if the postId doesnt found in httpRequest we will throw a notFound Page
    }
  }
  return {
    props: {
      post: data
    }
  }
}
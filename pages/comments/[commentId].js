import comments from "../../data/comments";
function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}{" "}
    </div>
  );
}

export default Comment;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { commentId } = params;
  const data = await fetch(`http:localhost:3000/api/comments/${commentId}`).then((res) =>
    res.json()
  );

  console.log(data)

//   const comment = comments.find((comment) => comment.id === Number(commentId));

  return {
    props: {
      comment: data
    },
  };
};

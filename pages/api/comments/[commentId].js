import comments from "../../../data/comments";
function handler(req, res) {
  const { commentId } = req.query;

    if(req.method === "GET") {
        const comment = comments.find((comment) => comment.id === Number(commentId));
        return res.status(200).json( comment?.id ? comment : 'notFound' );
    }
    
  if(req.method === "DELETE") {
    const deleteComment = comments.find((comment) => comment.id === Number(commentId));

    const index = comments.find(comment => comment.id === Number(commentId))

    comments.splice(index, 1)
    
    return res.status(200).json( deleteComment?.id ? deleteComment : 'notFound' );
  }
}

export default handler;

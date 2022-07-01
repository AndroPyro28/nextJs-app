import comments from "../../../data/comments";
function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((comment) => comment.id === Number(commentId));

  return res.status(200).json( comment?.id ? comment : 'notFound' );
}

export default handler;

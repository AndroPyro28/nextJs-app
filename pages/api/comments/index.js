import comments from "../../../data/comments"
function handler(req, res) {

    if(req.method === "GET") {
    return res.status(200).json(comments)
    }

    if(req.method === "POST") {
       const commentInput = req.body;
       const newComment = {
        id: Date.now(),
        text: commentInput
       }
       comments.push(newComment);

       return res.status(201).json(newComment)
    }
}

export default handler
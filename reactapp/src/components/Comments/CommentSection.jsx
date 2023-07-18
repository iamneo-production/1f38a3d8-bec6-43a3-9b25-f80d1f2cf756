import React, { useState } from "react";
import Comment from "./Comment";
import {FaRegCommentDots} from 'react-icons/fa';

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "John",
      text: "This is the first comment.",
      timestamp: new Date().toLocaleString()
    },
    {
      id: 2,
      username: "Jane",
      text: "This is the second comment.",
      timestamp: new Date().toLocaleString()
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentId, setCommentId] = useState(3);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment = {
        id: commentId,
        username: "User",
        text: newComment,
        timestamp: new Date().toLocaleString()
      };
      setComments([...comments, comment]);
      setNewComment("");
      setCommentId(commentId + 1);
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };
  const handleClickOpen=()=>{
    setOpen(true);
  };

  return (
    <div>
      <FaRegCommentDots size={30} onClick={handleClickOpen}/>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => handleDeleteComment(comment.id)}
        />
      ))}

      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-grow p-2 border rounded-l"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <CommentsSection/>
    </div>
  );
};

export default CommentsSection;

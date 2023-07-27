import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { FaRegCommentDots } from "react-icons/fa";
import axios from "axios";



const CommentsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentId, setCommentId] = useState(0);

  useEffect(() => {
    fetchComments();
  }, []);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get("/api/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const comment = {
        id: commentId,
        username: "User",
        text: newComment,
        timestamp: new Date().toLocaleString(),
        postId: 1,
      };
      try {
        await axios.post("/api/comments", comment);
        setComments([...comments, comment]);
        setNewComment("");
        setCommentId(commentId + 1);
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      <FaRegCommentDots onClick={handleButton} size={30} className="cursor-pointer" />
      {isOpen && (
        <div className="flex mt-4">
          <div>
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
                Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;

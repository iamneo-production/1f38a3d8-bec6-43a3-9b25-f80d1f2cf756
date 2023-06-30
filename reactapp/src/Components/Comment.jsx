import React, { useState } from "react";

const Comment = ({ name, text, timestamp, replies, onDelete, onReply }) => {
  const [replyMessage, setReplyMessage] = useState("");
  const handleDelete = () => {
    onDelete();
  };

  const handleReply = () => {
    onReply(replyMessage);
    setReplyMessage("");
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{timestamp}</p>
      </div>
      <p className="text-gray-700">{text}</p>
      {replies &&
        replies.map((reply) => (
          <div key={reply.id} className="ml-4 mt-2">
            <Comment
              name={reply.name}
              text={reply.text}
              timestamp={reply.timestamp}
            />
          </div>
        ))}
      <div className="flex mt-2">
        <input
          type="text"
          placeholder="Reply..."
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
          className="bg-gray-100 py-1 px-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleReply}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
        >
          Send
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      text: "This is a great post!",
      timestamp: "1 hour ago",
      replies: [
        {
          id: 3,
          name: "New User",
          text: "Thanks!",
          timestamp: "1 hour ago"
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Thanks for sharing!",
      timestamp: "2 hours ago"
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimestamp = new Date().toLocaleString();
    const newComments = [
      ...comments,
      {
        id: Date.now(),
        name: "New User",
        text: newComment,
        timestamp: newTimestamp
      }
    ];
    setComments(newComments);
    setNewComment("");
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleReplyComment = (id, replyMessage) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [
            ...(comment.replies || []),
            {
              id: Date.now(),
              name: "New User",
              text: replyMessage,
              timestamp: new Date().toLocaleString()
            }
          ]
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments.map((comment, index) => (
        <Comment
          key={comment.id}
          name={comment.name}
          text={comment.text}
          timestamp={comment.timestamp}
          replies={comment.replies}
          onDelete={() => handleDeleteComment(comment.id)}
          onReply={(replyMessage) =>
            handleReplyComment(comment.id, replyMessage)
          }
        />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="bg-gray-100 py-2 px-4 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
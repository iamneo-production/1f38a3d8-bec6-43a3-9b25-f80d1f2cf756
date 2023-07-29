import React, { useState } from 'react';

const Comment = ({ comment, onDelete }) => {
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);

  const handleReply = () => {
    if (reply.trim() !== '') {
      const newReply = { text: reply, timestamp: new Date().toLocaleString() };
      setReplies([...replies, newReply]);
      setReply('');
    }
  };

  const handleDeleteReply = (index) => {
    const updatedReplies = [...replies];
    updatedReplies.splice(index, 1);
    setReplies(updatedReplies);
  };

  const handleDeleteComment = () => {
    onDelete();
  };

  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold mr-2">{comment.username}</span>
        <span className="text-gray-500 text-sm">{comment.timestamp}</span>
      </div>
      <p className="mb-2">{comment.text}</p>

      {replies.map((reply, index) => (
        <div key={index} className="bg-gray-100 p-2 rounded mb-2">
          <div className="flex items-center justify-between">
            <span className="font-bold mr-2">{comment.username}</span>
            <span className="text-gray-500 text-sm">{reply.timestamp}</span>
          </div>
          <p className="mb-2">{reply.text}</p>
          <button
            className="text-red-500 hover:text-red-700 text-sm"
            onClick={() => handleDeleteReply(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <div className="flex items-center mt-4 ">
        <input
          type="text"
          placeholder="Reply..."
          className="flex-grow p-2 border rounded-l"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleReply}
        >
          Reply
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleDeleteComment}
        >
          Delete 
        </button>
      </div>
    </div>
  );
};

export default Comment;
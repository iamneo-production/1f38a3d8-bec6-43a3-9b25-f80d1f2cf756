import React, { useState } from 'react';
import axios from 'axios';

const BlockButton = ({ userId }) => {
  const [isBlocking, setIsBlocking] = useState(false);
  const [blockSuccess, setBlockSuccess] = useState(false);
  const [blockError, setBlockError] = useState('');

  const handleBlockClick = async () => {
    setIsBlocking(true);
    try {
      const response = await axios.post('/api/block', {
        userId: userId
      });
      setBlockSuccess(true);
    } catch (error) {
      setBlockError('An error occurred while blocking the user.');
    }
    setIsBlocking(false);
  };

  return (
    <>
      <button
        onClick={handleBlockClick}
        disabled={isBlocking}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {isBlocking ? 'Blocking...' : 'Block User'}
      </button>
      {blockSuccess && <p>User blocked successfully.</p>}
      {blockError && <p>{blockError}</p>}
    </>
  );
};

export default BlockButton;
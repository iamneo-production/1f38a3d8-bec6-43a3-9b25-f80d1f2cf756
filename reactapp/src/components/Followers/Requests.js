import React from 'react';

const RequestsList = ({ requests, onAcceptRequest, onDeclineRequest }) => {
  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-4">Requests List</h2>
      {/* Render the list of requests */}
      {requests.map((request) => (
        <div key={request.id} className="flex items-center mb-2">
          <img src={request.profileImage} alt="Profile" style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginRight: '1rem' }} />
          <span>{request.name}</span>
          <button
            className="ml-auto mr-2 px-2 py-1 bg-green-500 text-white rounded"
            onClick={() => onAcceptRequest(request.id)}
          >
            Accept
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => onDeclineRequest(request.id)}
          >
            Decline
          </button>
        </div>
      ))}
    </div>
  );
};

export default RequestsList;
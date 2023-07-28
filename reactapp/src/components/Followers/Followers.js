// FollowerList.js
import React from 'react';

const FollowerList = ({ followers }) => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter the followers based on the search query
  const filteredFollowers = followers.filter((follower) =>
    follower.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-4">Followers List</h2>
      <input
        type="text"
        placeholder="Search followers..."
        className="w-full p-2 rounded border mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Render the list of filtered followers */}
      {filteredFollowers.map((follower) => (
        <div key={follower.id} className="flex items-center mb-2 hover:bg-gray-100 p-2 rounded-lg">
          <img
            src={follower.profileImage || 'temporary-image.jpg'}
            alt="Profile"
            style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginRight: '1rem' }}
          />
          <span>{follower.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FollowerList;
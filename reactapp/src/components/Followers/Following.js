// FollowingList.js
import React from 'react';

const FollowingList = ({ following }) => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter the following based on the search query
  const filteredFollowing = following.filter((followed) =>
    followed.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-4">Following List</h2>
      <input
        type="text"
        placeholder="Search following..."
        className="w-full p-2 rounded border mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Render the list of filtered following */}
      {filteredFollowing.map((followed) => (
        <div key={followed.id} className="flex items-center mb-2">
          <img src={followed.profileImage} alt="Profile" style={{ width: '4rem', height: '4rem', borderRadius: '50%', objectFit: 'cover', marginRight: '1rem' }} />
          <span>{followed.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FollowingList;
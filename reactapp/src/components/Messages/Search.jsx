import React, { useContext, useState } from "react";
//import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  //const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    // Add your search logic here
    // ...

    try {
      // Add your Firestore query logic here
      // ...

      // setUser(result); // Replace 'result' with the retrieved user data
      setErr(false);
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    // Add your select logic here
    // ...

    setUser(null);
    setUsername("");
  };

  return (
    <div class="border-b-[gray] border-b border-solid">
      <div class="p-2.5">
        <input class="bg-transparent text-[white] border-[none] outline: none placeholder:text-[lightgray]"
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
     
      
        <div class="flex items-center gap-2.5 text-[white] cursor-pointer p-2.5 hover:bg-[#2f2d52]" onClick={handleSelect}>
          <img class="w-[50px] h-[50px] object-cover rounded-[50%]" src="https://i.mydramalist.com/ROkdP_5f.jpg" alt="" />
          <div className="userChatInfo">
          <span class=" text-lg font-medium">cha enwooo</span>
          <p class="text-sm text-[lightgray]">Hello</p>
          </div>
        </div>
      
    </div>
  );
};

export default Search;

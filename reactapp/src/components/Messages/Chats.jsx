import React, { useContext, useEffect, useState } from "react";
//import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  //const [chats, setChats] = useState([]);
  //const { dispatch } = useContext(ChatContext);

  {/*useEffect(() => {
    // Fetch and set chats data here (replace this with your own logic)
    const fetchChats = async () => {
      // Replace this with your own data fetching logic
      const fetchedChats = await fetchChatsData();
      setChats(fetchedChats);
    };

    fetchChats();
  }, []);
*/}
  {/*const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };*/}

  return (
    <div className="chats">
     
        <div
          class="flex items-center gap-2.5 text-[white] cursor-pointer p-2.5 hover:bg-[#2f2d52]">
         {/* key={chat.id}
      onClick={() => handleSelect(chat.userInfo)}*/}
        
          <img class="w-[50px] h-[50px] object-cover rounded-[50%]" src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?w=2000" alt="" />
          <div className="userChatInfo">
            <span class="text-lg font-medium">Uma</span>
            <p class="text-sm text-[lightgray]">Hello</p>
          </div>
        </div>
        <div class="flex items-center gap-2.5 text-[white] cursor-pointer p-2.5 hover:bg-[#2f2d52]">
          <img class="w-[50px] h-[50px] object-cover rounded-[50%]" src="https://versionweekly.com/wp-content/uploads/2022/03/cute-images-for-dp-whatsapp-hd.png" alt="" />
          <div className="userChatInfo">
            <span class="text-lg font-medium">Bhavana</span>
            <p class="text-sm text-[lightgray]">Hi</p>
          </div>
        </div>
        <div class="flex items-center gap-2.5 text-[white] cursor-pointer p-2.5 hover:bg-[#2f2d52]">
          <img class="w-[50px] h-[50px] object-cover rounded-[50%]" src="https://cutedp.in/wp-content/uploads/2022/10/cute_dp_image-2821.jpg" alt="" />
          <div className="userChatInfo">
            <span class="text-lg font-medium">Venkat</span>
            <p class="text-sm text-[lightgray]">Hey</p>
          </div>
        </div>
     
    </div>
  );
};

export default Chats;

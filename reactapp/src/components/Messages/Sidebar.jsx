import React from "react";
import Navbar from "../Messages/Navbar";
import Search from "../Messages/Search";
import Chats from "../Messages/Chats";

const Sidebar = () => {
  return (
    <div class="flex-1 bg-[#3e3c61] relative">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;

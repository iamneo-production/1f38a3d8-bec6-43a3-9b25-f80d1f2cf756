import React from 'react'
import Messages from '../Messages/Messages';
import Input from '../Messages/Input';
import Cam from '../Images/cam.png';
import Add from '../Images/add.png';
import More from '../Images/more.png';




const Chat = () => {
  return (
    <div class="flex-[2]">
      <div class="h-[50px] bg-[#5d5b8d] flex items-center justify-between text-[lightgray] p-2.5">
        <span>Cha enwooo</span>
        <div class=" flex gap-2.5">
          <img class="h-6 cursor-pointer" src={Cam} alt="" />
          <img class="h-6 cursor-pointer" src={Add} alt="" />
          <img class="h-6 cursor-pointer" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat
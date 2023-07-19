import React from 'react'
import Sidebar from './Messages/Sidebar'
import Chat from './Messages/Chat'

const Messages = () => {
  return (
    <div class="bg-[#a7bcff] h-screen flex items-center justify-center">
      <div class="border w-[65%] h-4/5 flex overflow-hidden w-[90%] rounded-[10px] border-solid border-[white]">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Messages
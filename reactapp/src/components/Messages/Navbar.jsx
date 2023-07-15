import React, { useContext } from 'react';
//import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  //const { currentUser } = useContext(AuthContext);

  
  return (
    <div class="flex items-center bg-[#2f2d52] h-[50px] justify-between text-[#ddddf7] p-2.5">
      <span class=" font-mono tracking-wide font-extrabold ">Messages</span>
      <div class=" flex gap-2.5">
        <img class="bg-[#ddddf7] h-6 w-6 object-cover rounded-[50%]" src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?w=2000" alt="" />
        <span>Uma</span>
      </div>
    </div>
  );
};

export default Navbar;

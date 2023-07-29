import React, { useContext, useState } from "react";
import Img from "../Images/img.png";
import Attach from "../Images/attach.png";
//import { AuthContext } from "../context/AuthContext";
//import { ChatContext } from "../context/ChatContext";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  {/*const { currentUser } = useContext(AuthContext);
const { data } = useContext(ChatContext);*/}

  const handleSend = async () => {
    // Add your send message logic here
    // ...

    setText("");
    setImg(null);
  };

  return (
    <div class="input h-16 bg-white px-4 flex items-center justify-between">
      <input class="w-full border-none outline-none text-indigo-900 text-lg"
        type="text"
        placeholder="Type something..."
        //onChange={(e) => setText(e.target.value)}value={text}
      />
      <div class="flex items-center gap-2.5">
        <img class="h-6 cursor-pointer" src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          //onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img class="h-7 w-9 cursor-pointer"src={Img} alt="" />
        </label>
        <button class="text-[white] bg-[#8da4f1] cursor-pointer px-[15px] py-2.5 border-[none]" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;

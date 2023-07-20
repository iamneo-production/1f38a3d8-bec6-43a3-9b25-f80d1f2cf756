import React from "react";
//import { AuthContext } from "../context/AuthContext";
//import { ChatContext } from "../context/ChatContext";

const Message = () => {
  {/*const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
*/}
  {/*const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
*/}
  return (
    <div
      
      class="gap-5 mb-5 flex flex-row-reverse gap-4 mb-4"
    >
      <div class="flex flex-col text-[gray] font-light">
      <p class="bg-[white] max-w-max px-5 py-2.5 rounded-[0px_10px_10px_10px] items-end">hello</p>
        <img class=" w-10 h-10 object-cover rounded-[50%]"
          src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?w=2000"

          alt=""
        />
        
        <span>just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-2.5">
        <p class="bg-[white] max-w-max px-5 py-2.5 rounded-[0px_10px_10px_10px] ">hello</p>
        <p class="bg-[white] max-w-max px-5 py-2.5 rounded-[0px_10px_10px_10px] ">hello</p>
         <img class="w-1/2" src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?w=2000" alt="" />
      </div>
    </div>
  );
};

export default Message;

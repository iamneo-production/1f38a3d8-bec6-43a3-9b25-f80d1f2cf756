import React, { useContext, useEffect, useState } from "react";
//import { ChatContext } from "../context/ChatContext";
import Message from "../Messages/Message";

const Messages = () => {
  //const [messages, setMessages] = useState([]);
  //const { data } = useContext(ChatContext);

  {/*useEffect(() => {
    // Fetch and set messages data here (replace this with your own logic)
    const fetchMessages = async () => {
      // Replace this with your own data fetching logic
      const fetchedMessages = await fetchMessagesData();
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, [data.chatId]);*/}

  return (
    <div class="bg-[#ddddf7] h-[calc(110%_-_160px)] overflow-scroll p-2.5">
      {/*{messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}*/}
      <Message/>
      <Message/>
    </div>
  );
};

export default Messages;

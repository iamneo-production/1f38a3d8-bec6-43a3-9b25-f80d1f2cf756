import React, { useState, useEffect, useRef } from "react";
import {IoIosShareAlt} from 'react-icons/io';
import axios from "axios";

function Share(props) {
  const userId = props.userId;
  const [friendsList, setFriendsList] = useState([]);

  const getFriendsList = (userId) => {
    // API to get list of friends of user with a particular userId
    axios
      .get("https://648ae86717f1536d65e9f0b7.mockapi.io/frndlist/frnds")
      .then(function (response) {
        const frndArray = Object.values(response.data).map((item) => ({
          id: item.id,
          frnd: item.frnd,
        }));
        setFriendsList(frndArray);
      });
  };

  useEffect(() => {
    getFriendsList(userId);
  }, [userId]);

  const [open, setOpen] = useState(false);
  const [receiverid, setReceiverid] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(receiverid);
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const descriptionElement = descriptionElementRef.current;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  function handleInput(id) {
    if (receiverid.includes(id)) {
      // If the ID is already in the array, remove it
      setReceiverid(receiverid.filter((receiverId) => receiverId !== id));
    } else {
      // If the ID is not in the array, add it
      setReceiverid([...receiverid, id]);
    }
  }

  return (
    <div className="p">
      <IoIosShareAlt size={30} onClick={handleClickOpen}/>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Send to</h2>
            <div className="space-y-2 h-64 overflow-auto">
              {friendsList.map((frnd) => (
                <div
                  key={frnd.id}
                  className="flex items-center space-x-2 mb-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="Friend"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm">{frnd.frnd}</p>
                  <input
                    onClick={() => {
                      handleInput(frnd.id);
                    }}
                    type="checkbox"
                    className="mr-2"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClose}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Share;
import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div className="relative h-[8vh] bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-md border-b border-gray-700/50">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5 top-1/2 -translate-y-1/2"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      
      <div className="flex items-center justify-center h-full px-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/50">
              <img src={profile} alt="profile" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
              onlineUsers.includes(selectedConversation._id) 
                ? 'bg-green-500 animate-pulse' 
                : 'bg-gray-500'
            }`}></div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-white">
              {selectedConversation.fullname}
            </h1>
            <span className={`text-sm ${
              onlineUsers.includes(selectedConversation._id)
                ? 'text-green-400'
                : 'text-gray-400'
            }`}>
              {getOnlineUsersStatus(selectedConversation._id)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;

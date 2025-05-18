import React from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversationStore from "../../zustand/useConversation";

function User({ user }) {
  const { onlineUsers } = useSocketContext();
  const { selectedConversation, setSelectedConversation } = useConversationStore();

  const isOnline = onlineUsers.includes(user._id);
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-purple-600 bg-opacity-50"
          : "hover:bg-gray-800 hover:bg-opacity-50"
      }`}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
          {user.fullname[0].toUpperCase()}
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white">{user.fullname}</h3>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
}

export default User;

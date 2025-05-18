import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${itsMe ? 'justify-end' : 'justify-start'} px-4 py-2 group`}>
      <div className={`max-w-[70%] ${itsMe ? 'order-2' : 'order-1'}`}>
        <div className={`relative rounded-3xl px-6 py-3 backdrop-blur-md transform transition-all duration-300 hover:scale-[1.02] ${
          itsMe 
            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
            : 'bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-100 shadow-[0_0_15px_rgba(31,41,55,0.3)]'
        }`}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent opacity-20"></div>
          <p className="text-sm relative z-10">{message.message}</p>
          <div className={`text-xs mt-2 flex items-center gap-2 ${itsMe ? 'text-purple-200' : 'text-gray-400'}`}>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{formattedTime}</span>
            {itsMe && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            )}
          </div>
          {itsMe && (
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-gradient-to-r from-indigo-500 to-pink-500"></div>
          )}
          {!itsMe && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-gradient-to-r from-gray-800 to-gray-900"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;

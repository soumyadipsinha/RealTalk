import React from "react";
import { useAuth } from "../context/AuthProvider";

function Message({ message }) {
  const [authUser] = useAuth();
  const fromMe = message.senderId === authUser._id;

  return (
    <div
      className={`flex ${fromMe ? "justify-end" : "justify-start"} mb-4 animate-fade-in px-2 sm:px-4`}
    >
      <div
        className={`relative group w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[50%] ${
          fromMe
            ? "bg-gradient-to-r from-seagreen-500 to-seagreen-600"
            : "bg-gradient-to-r from-gray-700 to-gray-800"
        } rounded-2xl p-3 sm:p-4 shadow-lg transform transition-all duration-300 hover:scale-[1.02] border border-seagreen-500/20`}
      >
        {/* Message Content */}
        <div className="relative z-10">
          <p className="text-white font-medium text-sm sm:text-base break-words">{message.message}</p>
          <div className="flex items-center justify-end mt-1 sm:mt-2 space-x-2">
            <span className="text-[10px] sm:text-xs text-white/70">
              {new Date(message.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {fromMe && (
              <span className="text-[10px] sm:text-xs text-white/70">
                {message.status === "sent" && "✓"}
                {message.status === "delivered" && "✓✓"}
                {message.status === "read" && "✓✓"}
              </span>
            )}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            fromMe
              ? "bg-gradient-to-r from-seagreen-600/20 to-seagreen-700/20"
              : "bg-gradient-to-r from-gray-600/20 to-gray-700/20"
          }`}
        ></div>

        {/* Decorative Elements */}
        <div
          className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            fromMe
              ? "bg-gradient-to-r from-seagreen-500/30 to-seagreen-600/30 blur-sm"
              : "bg-gradient-to-r from-gray-500/30 to-gray-600/30 blur-sm"
          }`}
        ></div>

        {/* Message Tail */}
        <div
          className={`absolute top-0 ${
            fromMe ? "right-0" : "left-0"
          } w-4 h-4 transform ${
            fromMe ? "translate-x-1/2" : "-translate-x-1/2"
          } -translate-y-1/2 rotate-45 ${
            fromMe
              ? "bg-gradient-to-r from-seagreen-500 to-seagreen-600"
              : "bg-gradient-to-r from-gray-700 to-gray-800"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Message; 
import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useAuth } from "../context/AuthProvider";

function ChatSection({ messages }) {
  const [authUser] = useAuth();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4 relative bg-gradient-to-br from-gray-900 via-seagreen-900/20 to-gray-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center opacity-5 animate-pulse"></div>
      
      {/* Seagreen Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-seagreen-900/30 to-gray-900/50"></div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-seagreen-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-seagreen-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-seagreen-300/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Messages Container */}
      <div className="relative space-y-2 sm:space-y-4 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)]">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-seagreen-500/20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-seagreen-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-sm sm:text-base text-center px-4">
                No messages yet. Start the conversation!
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <Message key={index} message={message} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
        <button
          onClick={scrollToBottom}
          className="bg-seagreen-500/20 hover:bg-seagreen-500/30 text-seagreen-400 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110 border border-seagreen-500/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-seagreen-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatSection; 
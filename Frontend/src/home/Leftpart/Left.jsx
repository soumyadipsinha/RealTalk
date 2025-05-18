import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-300 shadow-2xl">
      <Search />
      <div
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-900"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;

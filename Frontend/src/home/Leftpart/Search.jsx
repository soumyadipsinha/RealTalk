import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] bg-gradient-to-r from-purple-900 to-pink-900 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <label className="relative flex-1">
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-3 top-3 text-gray-400">
              <FaSearch />
            </span>
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

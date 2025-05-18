import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div className="px-4">
      <h1 className="px-4 py-3 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg mb-4">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto space-y-2"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (email) => {
    const updated = users.filter((user) => user.email !== email);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="space-y-4">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="p-4 border rounded flex items-center justify-between"
            >
              <div>
                <p className="font-semibold">{user.firstName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => handleDelete(user.email)}
                className="text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { Download, Users, Home, LogOut, Menu } from "lucide-react";

const Dashboard = () => {
  const [users] = useState([
    { id: 1, name: "Favour Samuel", email: "favour@example.com", role: "Admin" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 3, name: "Mary Smith", email: "mary@example.com", role: "User" },
    { id: 4, name: "Jane Foster", email: "jane@example.com", role: "Editor" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Email,Role"]
        .concat(users.map((u) => `${u.name},${u.email},${u.role}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flex min-h-screen bg-[#f8f8f8] text-[#242424] relative">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-30 h-screen w-64 bg-white/90 backdrop-blur-md shadow-lg flex flex-col justify-between transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } rounded-tr-[20px] rounded-br-[20px]`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8 text-[#242424] tracking-tight">
            Brand<span className="text-[#555]">Board</span>
          </h2>

          <nav className="space-y-4">
            <button className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition">
              <Home size={20} /> Dashboard
            </button>
            <button className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition">
              <Users size={20} /> Users
            </button>
          </nav>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button className="flex items-center gap-3 text-red-600 hover:bg-red-50 p-2 rounded-lg w-full transition">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 transition-all duration-300 w-full">
        {/* Header */}
        <header className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold">User Dashboard</h1>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-[#242424] text-white px-4 py-2 rounded-lg hover:bg-[#333] transition w-full sm:w-auto justify-center"
          >
            <Download size={18} /> Export Data
          </button>
        </header>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#242424]"
          />
        </div>

        {/* Users Table */}
        <div className="bg-white/90 backdrop-blur-md shadow-md rounded-[20px] overflow-x-auto">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 font-semibold text-sm">Name</th>
                <th className="py-3 px-6 font-semibold text-sm">Email</th>
                <th className="py-3 px-6 font-semibold text-sm">Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6">{user.name}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No matching users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

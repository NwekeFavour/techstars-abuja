import React, { useState } from "react";
import { Download, Users, Home, LogOut, Menu, Search } from "lucide-react";

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
    <div className="flex min-h-screen bg-[#f8f9fb] text-[#242424] relative">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-30 h-screen w-64 bg-white/90 backdrop-blur-md shadow-lg flex flex-col justify-between transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } rounded-tr-[20px] rounded-br-[20px]`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-10 text-[#242424]">
            Tech<span className="text-[#777] font-medium">Stars</span>
          </h2>

          <nav className="space-y-2 text-sm font-medium text-[#555]">
            <button className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition">
              <Home size={18} /> Dashboard
            </button>
            <button className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-2 rounded-lg transition">
              <Users size={18} /> Users
            </button>
          </nav>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button className="flex items-center gap-3 text-red-600 hover:bg-red-50 p-2 rounded-lg w-full transition">
            <LogOut size={18} /> Logout
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
      <main className="flex-1 md:py-9 py-7 md:px-10 px-5 sm:p-6 md:p-10 transition-all duration-300 w-full">
        {/* Header */}
        <header className="flex flex-wrap gap-4 items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200"
            >
              <Menu size={22} />
            </button>
            <div>
              <h1 className="text-[18px] md:text-3xl font-bold leading-tight">
                Welcome back, <span className="text-[#555]">Admin 👋</span>
              </h1>
              <p className="text-sm text-gray-500">
                Here’s an overview of your users and activities
              </p>
            </div>
          </div>

          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-[#242424] text-white px-4 py-2 rounded-lg hover:bg-[#333] transition w-full sm:w-auto justify-center"
          >
            <Download size={18} /> Export Data
          </button>
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white shadow-sm rounded-[20px] p-6 hover:shadow-md transition">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-3xl font-bold mt-2">{users.length}</p>
          </div>
          <div className="bg-white shadow-sm rounded-[20px] p-6 hover:shadow-md transition">
            <h3 className="text-gray-500 text-sm">Active Admins</h3>
            <p className="text-3xl font-bold mt-2">
              {users.filter((u) => u.role === "Admin").length}
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-[20px] p-6 hover:shadow-md transition">
            <h3 className="text-gray-500 text-sm">Editors</h3>
            <p className="text-3xl font-bold mt-2">
              {users.filter((u) => u.role === "Editor").length}
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300"
          />
        </div>

        {/* Users Table */}
        <div className="bg-white/90 backdrop-blur-md shadow-md rounded-[20px] overflow-x-auto">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
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
                    <td className="py-3 px-6 font-medium">{user.name}</td>
                    <td className="py-3 px-6 text-gray-600">{user.email}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.role === "Admin"
                            ? "bg-green-100 text-green-700"
                            : user.role === "Editor"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
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

"use client";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", message: searchQuery },
      { sender: "ai", message: "Searching for results..." },
    ]);
    setSearchQuery("");
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">ChatGPT Search</h1>
        </div>
      </header>

      {/* Search Box */}
      <div className="container mx-auto px-4 mt-8 flex justify-center">
        <div className="w-full max-w-lg bg-white rounded-lg shadow">
          <div className="flex items-center border-b border-gray-300 py-2 px-4">
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Search..."
            />
            <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Chat Results */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow">
          {/* Chat Messages */}
          <div className="p-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    msg.sender === "user" ? "bg-green-500" : "bg-blue-500"
                  } flex items-center justify-center text-white font-semibold mr-4`}
                >
                  {msg.sender.toUpperCase()}
                </div>
                <div className="flex-1">
                  <div
                    className={`bg-gray-200 rounded-lg p-3 ${
                      msg.sender === "user" ? "text-right" : ""
                    }`}
                  >
                    <p className="text-gray-800">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-300 px-4 py-2">
            <div className="flex">
              <input
                type="text"
                className="w-full bg-gray-200 rounded-full py-2 px-4 focus:outline-none"
                placeholder="Type your message..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full py-2 px-4 ml-2"
                onClick={handleSearch}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

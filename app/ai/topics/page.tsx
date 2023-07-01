"use client";

import { useState } from "react";

export default function Page() {
  const [topics, setTopics] = useState<string[]>([]);
  const [newTopic, setNewTopic] = useState("");

  const handleInputChange = (e: any) => {
    setNewTopic(e.target.value);
  };

  const handleAddTopic = () => {
    setTopics([...topics, newTopic]);
    setNewTopic("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">Topics</h1>
        </div>
      </header>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">My List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTopic}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter a new string"
          />
          <button
            onClick={handleAddTopic}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Add String
          </button>
        </div>
        {topics.length > 0 ? (
          <ul className="list-disc pl-8">
            {topics.map((str, index) => (
              <li key={index} className="mb-2">
                {str}
              </li>
            ))}
          </ul>
        ) : (
          <p>No strings added yet.</p>
        )}
      </div>
    </div>
  );
}

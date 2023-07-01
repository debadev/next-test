"use client";
import { useState } from "react";

export default function page() {
  const [selectedOption, setSelectedOption] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleTextChange = (e: any) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Do something with the selected option and text value
    console.log("Selected option:", selectedOption);
    console.log("Text value:", textValue);
    // Reset form values
    setSelectedOption("");
    setTextValue("");
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold">Ask An Expert</h1>
        </div>
      </header>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">My Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="dropdown" className="block font-semibold">
              Select an option:
            </label>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="textarea" className="block font-semibold">
              Enter some text:
            </label>
            <textarea
              id="textarea"
              value={textValue}
              onChange={handleTextChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

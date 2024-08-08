import React, { useState } from "react";

export default function HabbitForm({ newHabbit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newHabbit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="ml-2 mt-6 w-48 md:ml-16 md:mt-10 md:w-96 ">
      <div className="mb-2">
        <label className="block font-bold mb-1">Add Habbit</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded border-4"
          required
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-bold mb-1">Description Of The Habbit</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded border-4"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-green-500 text-white p-2 rounded mb-3">
          Let's Start
        </button>
      </div>
    </form>
  );
}

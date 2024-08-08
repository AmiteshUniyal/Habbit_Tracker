import React, { useState } from "react";

export default function HabbitItem({ id, habbit, removeHabbit, toggleComplete }) {
  return (
    <div className="border p-4 ml-2 md:ml-14 rounded border-black mb-3">
      <div>
        <h2 className={habbit.complete ? 'line-through' : ''} style={{ fontWeight: "bold" }}>
          {habbit.title}
        </h2>
        <p style={{ textDecoration: habbit.complete ? 'line-through' : '', color: 'black' }}>
          {habbit.description}
        </p>
      </div>
      <button
        onClick={() => toggleComplete(id)}
        className="p-1 text-white mt-2 bg-blue-500 rounded mr-4"
      >
        Completed
      </button>
      <button
        onClick={() => removeHabbit(id)}
        className="p-1 text-white mt-2 bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
}

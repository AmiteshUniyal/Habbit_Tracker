import React, { useState} from "react";
import HabbitForm from "./components/HabbitForm";
import HabbitList from "./components/HabbitList";
import MyPieChart from "./components/Piecharts";


export default function App() {
  const [habbits, setHabbits] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const newHabbit = (habbit) => {
    setHabbits([...habbits, { ...habbit, complete: false }]);
  };

  const removeHabbit = (id) => {
    const updatedHabbits = habbits.filter((abc, index) => index !== id);
    const completed = updatedHabbits.filter((habbit) => habbit.complete).length;
    setHabbits(updatedHabbits);
    setCompletedCount(completed);
  };

  const toggleComplete = (id) => {
    const updatedHabbits = habbits.map((habbit, index) =>
      index === id ? { ...habbit, complete: !habbit.complete } : habbit
    );
    setHabbits(updatedHabbits);
    const completed = updatedHabbits.filter((habbit) => habbit.complete).length;
    setCompletedCount(completed);
  };

  return (
    <>
      <div className="bg-green-500 text-white h-full md:text-center text-3xl font-bold p-4">
        <h1>HABBIT TRACKER</h1>
      </div>
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row sm:space-x-24 md:space-x-40 ">
        <div>
          <HabbitForm newHabbit={newHabbit} />
          <HabbitList habbits={habbits} removeHabbit={removeHabbit} toggleComplete={toggleComplete} />
        </div>
        <div>
          <MyPieChart complete={completedCount} remaining={habbits.length - completedCount} />
        </div>
      </div>
    </>
  );
}

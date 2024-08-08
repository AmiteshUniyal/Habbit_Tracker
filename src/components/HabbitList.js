import { useEffect } from 'react';
import HabbitItem from './HabbitItem';

export default function HabbitList({ habbits, removeHabbit, toggleComplete }) {
    return (
    <div className=''>
      {habbits.map((habbit, index) => (
        <HabbitItem
          key={index}
          id={index}
          habbit={habbit}
          removeHabbit={removeHabbit}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
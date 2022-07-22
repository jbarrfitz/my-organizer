import React from 'react';
import { useState } from 'react';

const Calendar = () => {
  const [task, setTask] = useState<string>('');

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  return (
    <main className='main-container'>
      <h1>Jerry&apos;s Calendar!</h1>
      <h2>
        There is going to be some calendar stuff here! It will be very exciting!
      </h2>
      <form className='task-form'>
        <label htmlFor='task-title'>Task:</label>
        <input
          type='text'
          id='task-title'
          name='task'
          onChange={handleTaskChange}
          value={task}
        />
      </form>
    </main>
  );
};

export default Calendar;

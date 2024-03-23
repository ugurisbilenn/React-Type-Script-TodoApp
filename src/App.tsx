import React,{ChangeEvent, FC} from 'react';
import { useState } from 'react';

import './App.css';

const  App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setWorkDay(Number(event.target.value));
    }
  };
  return (
    <div className="App">
      <div>
        <input type='text' value={task} 
        placeholder='Taskınız'
        name='task' 
        onChange={handleChange}/>
        <input type='number' 
        value={workDay} 
        name='workDay' 
        placeholder='Kaç Günde tamamlamalısınız' 
        onChange={handleChange}/>
        <button>Yeni Task ekle</button>
      </div>
    </div>
  );
}

export default App;

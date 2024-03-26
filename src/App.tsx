import React,{ChangeEvent, FC} from 'react';
import { useState } from 'react';
import {todoType} from './apptypes';
import './App.css';
import TodoItem from './TodoItem';



const  App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);


  console.log(todoList);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = ():void =>{
    const newTask = {taskName:task, workDay:workDay};
    setTodoList([...todoList,newTask]);
    
    setWorkDay(0);
    setTask('');
    
  }

  const deleteTask = (nameToDelete :string) : void =>{
    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete;
    }));
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
        <button onClick={addNewTask}>Yeni Task ekle</button>
      </div>
      <div>
        {todoList.map((task: todoType, index: number)=>{
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  );
}

export default App;

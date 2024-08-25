import { useState } from 'react';
import "./App.css";
import Ul from './ul';
function Todo() {
  let [todoInput, todoInputFunction] = useState('');
  let [todo, setToDo] = useState([]);

  let addToDo = () => {
    if (todoInput) {
      setToDo([todoInput, ...todo]);
      todoInputFunction('');
    }
  };


  let deleteData = (index) => {
      setToDo(todo.filter((todo , i) => index !== i))
  }

  let editData = (index) => {
      let promptValue = prompt('Enter a Value')
      setToDo(todo.map((todo,i) => index === i ? promptValue : todo))
  }


  return (
    <main className='flex justify-center items-center flex-col'>
      <h1 className='text-center text-6xl font-semibold mt-20'>To Do App</h1>
      <div className="main-div w-full mt-7 flex justify-center items-center flex-col">
        <input type="text" placeholder='Enter A ToDo' value={todoInput} onChange={(event) => todoInputFunction(event.target.value)} className='border h-10 font-medium  border-blue-500 outline-blue-500 w-1/2'/>
        <button className='border border-blue-500 px-5 py-2 hover:scale-95 mt-7 font-semibold' onClick={addToDo}>Add To Do</button>
        <div className="ul flex justify-center items-center flex-col w-full">
          <ul className='w-full px-5 py-2'>
            {todo.map((todo, index) => (
              <Ul index={index} data={[...todo]} editFunction={editData(index)} deleteFunction={() => deleteData(index)}/>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Todo;

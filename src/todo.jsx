import { useState } from 'react'
import "./App.css"

function Todo() {
  let [todoInput , todoInputFunction] = useState('')
  let [todo, setToDo] = useState([])


  let addToDo = () => {
        console.log('todo added');
        console.log(todoInput);
        setToDo([todoInput , ...todo]) 
        console.log(todo , "====>todo");
        todoInputFunction('')
  }
  return (
    <main className='flex justify-center items-center flex-col'>
    <h1 className='text-center text-6xl font-semibold mt-20'>To Do App</h1>
      <div className="main-div w-full mt-7 flex justify-center items-center flex-col">
        <input type="text" placeholder='Enter A ToDo' value={todoInput} onChange={(event) => todoInputFunction(event.target.value)} className='border h-10 font-semibold border-blue-500 outline-blue-500 w-1/2'/>
        <button className='border border-blue-500 px-5 py-2 mt-7 font-semibold' onClick={addToDo}>Add To Do</button>
        <div className="ul flex justify-center items-center flex-col">
        {
          todo.forEach((todo , index) => {
              <p data-id={index}> {todo} </p>
          })
        }
        </div>
      </div>

    </main>
  )
}

export default Todo;

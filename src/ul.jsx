import React, { useState } from "react";
const Ul = ({ index, data ,deleteFunction , editFunction}) => {

  let deleteData = () => deleteFunction(index)
  let editData = () => editFunction(index)

  return (
    <div className="flex justify-between items-center group" key={index}>
      <li key={index} className="text-left text-3xl w-full py-6 overflow-hidden text-ellipsis whitespace-nowrap group-hover:w-3/4 transition-width duration-10"> {data} </li>
      <div className="hidden group-hover:block absolute right-0">
        <main className="flex gap-6 justify-end items-center">
          <button key={index} className="border border-blue-500 py-1 px-4 hover:scale-95" onClick={() => editData(index)}>Edit</button>
          <button key={index} className="border border-blue-500 py-1 px-4 hover:scale-95" onClick={() => deleteData(index)}>Delete</button>
        </main>
      </div>
    </div>
  );
};

export default Ul;
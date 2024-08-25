// import React from "react";

// const Ul = ({ index, data }) => {
//   return (
//     <>
//     <li key={index} className="text-left text-3xl w-[75%] py-6 overflow-hidden text-ellipsis whitespace-nowrap"> {data} </li>
//     <main className="flex gap-6 justify-end items-center -mt-14">
//     <button className="border border-blue-500 py-1 px-4">Edit</button>
//     <button className="border border-blue-500 py-1 px-4">Delete</button>
//     </main>
//     </>
//   );
// };

// export default Ul;

import React, { useState } from "react";

const Ul = ({ index, data }) => {

let handleDeleteData = (ind) => {
    
    // console.log(ind , 'yae index ha');
    // data.splice(ind , 1);
    // console.log(data , 'yae data ha');
    
}
console.log(index);

  return (
    <div className="flex justify-between items-center group" key={index}>
      <li key={index} className="text-left text-3xl w-full py-6 overflow-hidden text-ellipsis whitespace-nowrap group-hover:w-3/4 transition-width duration-10"> {data} </li>
      <div className="hidden group-hover:block absolute right-0">
        <main className="flex gap-6 justify-end items-center">
          <button key={index} className="border border-blue-500 py-1 px-4 hover:scale-95">Edit</button>
          <button key={index} className="border border-blue-500 py-1 px-4 hover:scale-95" onClick={() => handleDeleteData(index)}>Delete {index} index</button>
        </main>
      </div>
    </div>
  );
};

export default Ul;
"use client";

import React, { useState } from "react";

const EachTodo = ({ title, desc, completed }) => {
  return (
    <div>
      <p>title: {title}</p>
      <p>desc: {desc}</p>
      <p>completed:{completed.toString()}</p>
    </div>
  );
};

const NewTodo = () => {
  const [inputTitle, setInputTitle] = useState();
  //   const [title, setTitle] = useState("meditation later tonight");
  //   const[title, setTitle] = useState2()
  //   setTitle(inputTitle)
  const [desc, setDesc] = useState();
  const [allTodo, setAllTodo] = useState([
    {
      title: "hook",
      desc: "hook her throat",
      completed: false,
    },
    {
      title: "Early morning coding",
      desc: "We all gone make it",
      completed: true,
    },
  ]);
  return (
    <div>
      <div>
        {allTodo.map((todo, index) => (
          <EachTodo
            completed={todo.completed}
            desc={todo.desc}
            title={todo.title}
            key={index}
          />
        ))}
      </div>
      <div className="todo-container">
        {/* input for title */}
        <input
          placeholder="enter title"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        {/* text area for todo description */}
        <textarea
          placeholder="enter desc"
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* button to submit todo */}
        <button
          onClick={() => {
            const createdTodo = {
              title: inputTitle,
              desc: desc,
              completed: false,
            };
            setAllTodo((prev) => {
              return [...prev, createdTodo];
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewTodo;

// const useState2 = () => {
//   let title;
//   const setTitle = (value) => {
//     title = value;
//   };
//   [title, setTitle];
// };

{
  /* use of alert */
}
{
  /* <button onClick={() => alert("you just clicked on the button")}>
        Submit
      </button> */
}

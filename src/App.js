import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [input, setinput] = useState("");
  const [tasks, settasks] = useState([]);

  const addinput = () => {
    const task = {
      text: input,
      id: Date.now(),
    };
    settasks([...tasks, task]);
    setinput("");
  };

  const deletes = (id) => {
    const newtask = tasks.filter((task) => task.id !== id);
    settasks(newtask);
  };

  const clearall = () => {
    settasks([]);
  };

  return (
    <div>
      <h1 className="my-4 mx-2 text-center">todo list</h1>

      {/* add input and add button */}
      <div className="my-3 mx-2 text-center">
        <input
          type="text"
          placeholder="write something"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="mx-2" onClick={addinput}>
          add
        </button>
      </div>

      {/* add task */}
      {tasks.length == 0 ? (
       <h1 style={{color:'#AE445A'}} className="mx-3 my-2"> "NO PENDING TASK"</h1>
      ) : (
        <div className="boxes">
          <ul style={{ listStyle: "none" }} className=" text-center">
            {tasks.map((task) => (
              <li className="box" id={task.id}>
                {task.text}
                <button className="mx-2" onClick={(e) => deletes(task.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* add clear button */}
      <div className="text-center">
        {tasks.length > 0 && (
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={clearall}
          >
            clear all
          </button>
        )}
      </div>
    </div>
  );
}

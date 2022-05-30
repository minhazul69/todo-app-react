import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Task from "./Task/Task";

const Todo = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://agile-stream-09474.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const data = { name, description };
    const url = `https://agile-stream-09474.herokuapp.com/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Task Added SuccessFull");
        e.target.reset();
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-3xl">Task</h2>
          </div>
          <div className=" text-center">
            <form onSubmit={handleTaskSubmit}>
              <label className="label ml-10">
                <span className="label-text">Name</span>
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                placeholder="Name"
                className="input input-bordered input-error w-full max-w-xs"
              />
              <label className="label ml-10">
                <span className="label-text">Description</span>
              </label>
              <textarea
                required
                ref={descriptionRef}
                className="border p-4"
                cols="37"
                rows="6"
                placeholder="Description"
              ></textarea>
              <input
                className="btn btn-outline px-10 my-5"
                type="submit"
                value="Add Task"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 lg:px-12 my-8 ">
        {tasks.map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

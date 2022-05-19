import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Task from "./Task/Task";

const Todo = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const data = { name, description };
    const url = `http://localhost:5000/task`;
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
    <div className="">
      <div className="flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center font-bold text-3xl">Task</h2>
          </div>
          <div className=" text-center">
            <form onSubmit={handleTaskSubmit}>
              <label class="label ml-10">
                <span class="label-text">Name</span>
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                placeholder="Name"
                class="input input-bordered input-error w-full max-w-xs"
              />
              <label class="label ml-10">
                <span class="label-text">Description</span>
              </label>
              <textarea
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
      <div className="grid grid-cols-3 gap-4 lg:px-12 my-8">
        {tasks.map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

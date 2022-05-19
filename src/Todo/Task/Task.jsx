import React, { useState } from "react";
import toast from "react-hot-toast";

const Task = ({ task }) => {
  const { name, description } = task;
  const [strikethrough, setStrikethrough] = useState(false);
  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/taskDelete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Task Delete SuccessFull");
        });
    }
  };
  const handleSetStrikethrough = () => {
    setStrikethrough(!strikethrough);
    console.log(strikethrough);
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
          }}
        >
          {description}
        </p>
        <div class="card-actions justify-between mt-5">
          <button onClick={handleSetStrikethrough} class="btn btn-secondary">
            Complete
          </button>
          <button
            onClick={() => handleDeleteService(task._id)}
            class="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

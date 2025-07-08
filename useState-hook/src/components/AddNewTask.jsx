import * as React from "react";

const { useState } = React;

function AddNewTask(props) {
  const { addItem } = props;
  const [newTask, setNewTask] = useState("");

  const updateNewTask = (event) => {
    const task = event.target.value;
    setNewTask(task);
  };

  const createId = () => Math.random().toString(16).slice(2);

  const createTask = () => {
    if (newTask.length <= 0) return; // return if task is empty
    addItem((prevItems) => [
      ...prevItems,
      { id: createId(), task: newTask, isDone: false },
    ]);
    setNewTask("");
  };

  const handleEnterKeyDown = (event) => {
    if (event.key !== "Enter") return;
    createTask();
  };

  return (
    <div className="task-input-container">
      <div className="input-container">
        <label htmlFor="new-task">Add Task: </label>
        <input
          type="text"
          name="new-task"
          id="new-task"
          value={newTask}
          onChange={(event) => updateNewTask(event)}
          onKeyDown={(event) => handleEnterKeyDown(event)}
        />
      </div>
      <button onClick={createTask} aria-label="Add Task">
        <i aria-hidden="true" className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default AddNewTask;

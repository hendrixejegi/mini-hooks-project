import React from "react";

function PendingTasks(props) {
  const { tasks, updateItems } = props;

  const getId = (event) => event.currentTarget.getAttribute("data-task-id");

  const markDone = (event) => {
    const taskId = getId(event);
    updateItems((prevItems) =>
      prevItems.map((item) =>
        item.id !== taskId ? item : { ...item, isDone: !item.isDone }
      )
    );
  };

  const deleteTask = (event) => {
    const taskId = getId(event);
    updateItems((prevItems) =>
      prevItems.filter((item) => {
        return item.id !== taskId;
      })
    );
  };

  return (
    <div>
      <h3>Pending Tasks</h3>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="task">
            <p>{task.task}</p>
            <button
              aria-label="Mark done"
              onClick={(event) => markDone(event)}
              data-task-id={task.id}
            >
              <i aria-hidden="true" className="fa-regular fa-thumbs-up"></i>
            </button>
            <button
              aria-label="Delete Task"
              data-task-id={task.id}
              onClick={(event) => deleteTask(event)}
            >
              <i aria-hidden="true" className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))
      ) : (
        <p>{tasks}</p>
      )}
    </div>
  );
}

export default PendingTasks;

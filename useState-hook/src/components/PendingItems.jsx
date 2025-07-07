import React from "react";

function PendingItems(props) {
  const { tasks, updateItems } = props;

  const markDone = (event) => {
    const taskId = event.currentTarget.getAttribute("data-task-id");
    updateItems((prevItems) => {
      prevItems.map((item, idx) => {
        console.log(item);
        return item;
      });
    });
  };

  const deleteTask = null;

  return (
    <div>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task, idx) => (
          <div key={idx} className="task">
            <p>{task.task}</p>
            <button
              aria-label="Mark done"
              onClick={(event) => markDone(event)}
              data-task-id={idx}
            >
              <i aria-hidden="true" className="fa-regular fa-thumbs-up"></i>
            </button>
            <button aria-label="Delete Task" onClick={deleteTask}>
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

export default PendingItems;

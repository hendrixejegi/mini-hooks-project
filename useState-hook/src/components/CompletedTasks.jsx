import React from "react";

function CompletedTasks(props) {
  const { tasks } = props;

  return (
    <div>
      <h3>Completed Tasks</h3>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => <p key={task.id}>{task.task}</p>)
      ) : (
        <p>{tasks}</p>
      )}
    </div>
  );
}

export default CompletedTasks;

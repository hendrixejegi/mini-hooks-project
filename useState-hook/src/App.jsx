import * as react from "react";
import "./App.css";
import AddNewTask from "./components/AddNewTask";
import PendingTasks from "./components/pendingTasks";
import CompletedTasks from "./components/CompletedTasks";

const { useState } = react;

function App() {
  const [items, setItems] = useState([]);

  const pendingTasks =
    Array.isArray(items) && items.length > 0
      ? items.filter((task) => !task.isDone)
      : "No Pending Tasks";

  const completedTasks =
    Array.isArray(items) && items.length > 0
      ? items.filter((task) => task.isDone)
      : "Don't give up";

  return (
    <div className="wrapper">
      <AddNewTask addItem={setItems} />
      <PendingTasks tasks={pendingTasks} updateItems={setItems} />
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
}

export default App;

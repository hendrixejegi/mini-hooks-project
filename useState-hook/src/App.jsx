import * as react from "react";
import "./App.css";
import AddNewTask from "./components/AddNewTask";
import PendingItems from "./components/pendingItems";

const { useState } = react;

function App() {
  const [items, setItems] = useState([]);

  const pendingTasks =
    items.length > 0
      ? items.filter((task) => !task.isDone)
      : "No Pending Tasks";
  console.log(pendingTasks);

  return (
    <div className="wrapper">
      <AddNewTask addItem={setItems} />
      <PendingItems tasks={pendingTasks} updateItems={setItems} />
    </div>
  );
}

export default App;

# Project: useState Hook

## ✔ Real Life Problem

A user wants to keep track of items in a to-do list.

## 🎯 Project Goal:

- Add, complete, and delete tasks.
- Show remaining tasks.

## 🧩 Hooks Used:

`useState`

## 🛠 Implementation Details:

- **Key Components:** `<AddNewTask />` , `<PendingTasks />`, `<CompletedTasks />`.
- **State Structure:** App uses two states; `items` (array) which tracks the users tasks and `newTask` (string) which tracks the users input.
- **Event Handlers:** When the user types into the task input i make a call to `updateNewTask` which grabs the current value of the input and then updates the state of `newTask` with `setNewTask`.

## 📌 Hook Integration:

- `useState` is used to manage dynamic state like the task list, input value, and task completion.
- Code Snippet
  ```jsx
  const [items, setItems] = useState([]); // Manage task list
  const [newTask, setNewTask] = useState(""); // Manage input value
  ```
- Without reloading the page, I can update and display a new task list anytime the state changes.

## ✅ Testing / Validation:

- User can add , complete, and delete tasks
- Edge Case: I added a check empty input values and that prevent the user from adding a blank task and a listener for the `Enter` key that allows the user to create a task without the clicking the add the button.

## 📈 Learning Notes:

- Always use unique IDs to identify items on a list especially when working with derived or filtered versions of state. Indexes are only safe when your list is static

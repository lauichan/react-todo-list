import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TODOLIST from "./data";

function App() {
  const [tasks, setTasks] = useState(TODOLIST);
  const workingList = tasks.filter((task) => task.isDone === false);
  const doneList = tasks.filter((task) => task.isDone === true);

  const addTask = (title, content) => {
    let newTask = {
      id: tasks.length,
      title,
      content,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeTaskState = (id, bool) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !bool } : task)));
  };

  return (
    <div className="container">
      <Header />
      <main>
        <TaskForm addTask={addTask} />
        <TaskList tasks={workingList} title="Working" deleteTask={deleteTask} changeTaskState={changeTaskState} />
        <TaskList tasks={doneList} title="Done" deleteTask={deleteTask} changeTaskState={changeTaskState} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

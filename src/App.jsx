import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TODOLIST from "./data";

function App() {
  const [tasks, setTasks] = useState(TODOLIST);
  const workingList = tasks.filter((task) => !task.isDone);
  const doneList = tasks.filter((task) => task.isDone);

  const addTask = (title, content) => {
    let newTask = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    setTasks((prevtasks) => [newTask, ...prevtasks]);
  };

  const deleteTask = (id) => {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
  };

  const changeTaskState = (id, bool) => {
    setTasks((prevtasks) => prevtasks.map((task) => (task.id === id ? { ...task, isDone: !bool } : task)));
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

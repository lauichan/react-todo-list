import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

function TaskController() {
  const [tasks, setTasks] = useState([]);
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
    <>
      <TaskForm addTask={addTask} />
      <TaskList title="Working" tasks={workingList} deleteTask={deleteTask} changeTaskState={changeTaskState} />
      <TaskList title="Done" tasks={doneList} deleteTask={deleteTask} changeTaskState={changeTaskState} />
    </>
  );
}

export default TaskController;

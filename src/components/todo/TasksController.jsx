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
    if (window.confirm("삭제 확인")) {
      setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
    }
  };

  const toggleIsDone = (id) => {
    console.log(id);
    setTasks((prevtasks) => prevtasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  };

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList title="Working" tasks={workingList} deleteTask={deleteTask} toggleIsDone={toggleIsDone} />
      <TaskList title="Done" tasks={doneList} deleteTask={deleteTask} toggleIsDone={toggleIsDone} />
    </>
  );
}

export default TaskController;

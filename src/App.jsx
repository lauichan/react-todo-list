import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

let todoList = [
  {
    id: 0,
    title: "240116 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: true,
  },
  {
    id: 1,
    title: "240117 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
  {
    id: 2,
    title: "240118 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
  {
    id: 3,
    title: "240119 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: true,
  },
  {
    id: 4,
    title: "240120 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
  {
    id: 5,
    title: "240121 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(todoList);
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
    setTasks([...tasks].filter((task) => task.id !== id));
  };

  const changeTaskState = (id, bool) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isDone: !bool } : task))
    );
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={workingList}
          deleteTask={deleteTask}
          changeTaskState={changeTaskState}
        >
          Working
        </TaskList>
        <TaskList
          tasks={doneList}
          deleteTask={deleteTask}
          changeTaskState={changeTaskState}
        >
          Done
        </TaskList>
      </main>
      <Footer />
    </div>
  );
}

export default App;

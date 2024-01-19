import "./App.css";
import "./reset.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";

function TaskManage({ id, isDone, deleteTask, changeTaskState }) {
  const taskState = isDone ? "완료" : "취소";

  const deleteClickHandler = () => {
    deleteTask(id);
  };

  const stateClickHandler = () => {
    changeTaskState(id, isDone);
  };

  return (
    <div>
      <button onClick={() => deleteClickHandler(id)}>삭제</button>
      <button onClick={stateClickHandler}>{taskState}</button>
    </div>
  );
}

function TaskRow({ task, deleteTask, changeTaskState }) {
  return (
    <li>
      <h3>{task.title}</h3>
      {task.content}
      <TaskManage
        id={task.id}
        isDone={task.isDone}
        deleteTask={deleteTask}
        changeTaskState={changeTaskState}
      />
    </li>
  );
}

function TaskTable({ tasks, children, deleteTask, changeTaskState }) {
  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <TaskRow
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        changeTaskState={changeTaskState}
      />
    );
  });

  return (
    <section>
      <h2>{children}</h2>
      <ul>{rows}</ul>
    </section>
  );
}

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTask(title, content);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={title} onChange={getTitle}></input>
      {title}
      <input type="text" value={content} onChange={getContent}></input>
      {content}
      <button type="submit">할 일 추가</button>
    </form>
  );
}

let TODOLIST = [
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
    title: "240116 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: true,
  },
  {
    id: 4,
    title: "240117 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
  {
    id: 5,
    title: "240118 TIL 쓰기",
    content: "매일매일 TIL 쓰기. https://nauichan.tistory.com/",
    isDone: false,
  },
];

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
    let copyTasks = [...tasks];
    copyTasks[id].isDone = !bool;
    setTasks(copyTasks);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <TaskForm addTask={addTask} />
        <TaskTable
          tasks={workingList}
          deleteTask={deleteTask}
          changeTaskState={changeTaskState}
        >
          Working
        </TaskTable>
        <TaskTable
          tasks={doneList}
          deleteTask={deleteTask}
          changeTaskState={changeTaskState}
        >
          Done
        </TaskTable>
      </main>
      <Footer />
    </div>
  );
}

export default App;

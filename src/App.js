import "./App.css";
import { useState } from "react";

function TaskManage({ id, isDone }) {
  const taskState = isDone ? "완료" : "취소";
  return (
    <div>
      <button>삭제 {id}</button>
      <button>{taskState}</button>
    </div>
  );
}

function TaskRow({ task }) {
  return (
    <li>
      <h3>{task.title}</h3>
      {task.content}
      <TaskManage id={task.id} isDone={task.isDone} />
    </li>
  );
}

function TaskTable({ tasks, children }) {
  let rows = [];
  tasks.forEach((task) => {
    rows.push(<TaskRow key={task.id} task={task} />);
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

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskTable tasks={workingList}>Working</TaskTable>
      <TaskTable tasks={doneList}>Done</TaskTable>
    </>
  );
}

export default App;

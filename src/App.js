import "./App.css";

function TaskManage({ id, isDone }) {
  const taskState = isDone ? "완료" : "취소";
  return (
    <>
      <button>삭제 {id}</button>
      <button>{taskState}</button>
    </>
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

function TaskForm() {
  return (
    <form>
      <input type="text"></input>
      <input type="text"></input>
      <button type="submit">할 일 추가</button>
    </form>
  );
}

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
];

function App() {
  const workingList = todoList.filter((task) => task.isDone === false);
  const doneList = todoList.filter((task) => task.isDone === true);
  return (
    <>
      <TaskForm />
      <TaskTable tasks={workingList}>Working</TaskTable>
      <TaskTable tasks={doneList}>Done</TaskTable>
    </>
  );
}

export default App;

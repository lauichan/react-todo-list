import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";
import Form from "./components/TodoForm";
import List from "./components/TodoList";
import todoList from "./data";

function App() {
  let [list, setList] = useState(todoList);

  return (
    <div className="container">
      <Header />
      <main>
        <Form list={list} setlist={setList} />
        <List title="진행중" type="working" list={list} setlist={setList} />
        <List title="완료" type="done" list={list} setlist={setList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

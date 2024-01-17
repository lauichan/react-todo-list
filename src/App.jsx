import "./App.css";
import { useState } from "react";
import { Header, Footer } from "./components/Layout";
import Form from "./components/Form";
import { WorkingList, DoneList } from "./components/List";
import todoList from "./data";

function App() {
  let [list, setList] = useState(todoList);

  return (
    <div className="container">
      <Header />
      <main>
        <Form list={list} setlist={setList} />
        <WorkingList list={list} />
        <DoneList list={list} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

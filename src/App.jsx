import "./reset.css";
import "./App.css";
import { Header, Footer } from "./components/Layout";
import TaskController from "./components/todo/TasksController";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <TaskController />
      </main>
      <Footer />
    </div>
  );
}

export default App;

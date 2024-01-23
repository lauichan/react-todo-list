import "./reset.css";
import "./App.css";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import TaskController from "./components/todo/TasksController";

function App() {
  return (
    <div className="container">
      <SiteHeader />
      <main>
        <TaskController />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;

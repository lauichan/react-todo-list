function TaskList({ tasks, title, deleteTask, changeTaskState }) {
  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <TaskCard key={task.id} task={task}>
        <TaskManageBtn id={task.id} isDone={task.isDone} deleteTask={deleteTask} changeTaskState={changeTaskState} />
      </TaskCard>
    );
  });

  return (
    <section className="todo-section">
      <h2 className={title.toLowerCase()}>{title}</h2>
      <ul className="todo-list">{rows}</ul>
    </section>
  );
}

function TaskCard({ task, children }) {
  return (
    <li>
      <h3>{task.title}</h3>
      {task.content}
      {children}
    </li>
  );
}

function TaskManageBtn({ id, isDone, deleteTask, changeTaskState }) {
  const taskState = isDone ? "취소" : "완료";

  const handleDeleteBtn = () => {
    !window.confirm("삭제 확인") || deleteTask(id);
  };

  const handleIsDoneBtn = () => {
    changeTaskState(id, isDone);
  };

  return (
    <div>
      <button className="delete" type="button" onClick={handleDeleteBtn}>
        삭제
      </button>
      <button type="button" onClick={handleIsDoneBtn}>
        {taskState}
      </button>
    </div>
  );
}

export default TaskList;

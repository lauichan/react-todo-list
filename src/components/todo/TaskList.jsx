function TaskList({ tasks, title, deleteTask, toggleIsDone }) {
  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <TaskCard key={task.id} task={task}>
        <TaskManageBtn id={task.id} isDone={task.isDone} deleteTask={deleteTask} toggleIsDone={toggleIsDone} />
      </TaskCard>
    );
  });
  const todo = rows.length === 0 ? <li className="empty">빈 목록.</li> : rows;

  return (
    <section className="todo-section">
      <h2 className={title.toLowerCase()}>{title}</h2>
      <ul className="todo-list">{todo}</ul>
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

function TaskManageBtn({ id, isDone, deleteTask, toggleIsDone }) {
  const taskState = isDone ? "취소" : "완료";

  return (
    <div>
      <button className="delete" type="button" onClick={() => deleteTask(id)}>
        삭제
      </button>
      <button type="button" onClick={() => toggleIsDone(id)}>
        {taskState}
      </button>
    </div>
  );
}

export default TaskList;

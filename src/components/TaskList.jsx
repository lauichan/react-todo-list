function TaskList({ tasks, children, deleteTask, changeTaskState }) {
  let rows = [];
  tasks.forEach((task) => {
    rows.push(
      <TaskCard
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        changeTaskState={changeTaskState}
      />
    );
  });

  return (
    <section className="todo-section">
      <h2 className={children.toLowerCase()}>{children}</h2>
      <ul className="todo-list">{rows}</ul>
    </section>
  );
}

function TaskCard({ task, deleteTask, changeTaskState }) {
  return (
    <li>
      <h3>{task.title}</h3>
      {task.content}
      <TaskManageBtn
        id={task.id}
        isDone={task.isDone}
        deleteTask={deleteTask}
        changeTaskState={changeTaskState}
      />
    </li>
  );
}

function TaskManageBtn({ id, isDone, deleteTask, changeTaskState }) {
  const taskState = isDone ? "취소" : "완료";

  const deleteClickHandler = () => {
    !window.confirm("삭제 확인") || deleteTask(id);
  };

  const stateClickHandler = () => {
    changeTaskState(id, isDone);
  };

  return (
    <div>
      <button
        className="delete"
        type="button"
        onClick={() => deleteClickHandler(id)}
      >
        삭제
      </button>
      <button type="button" onClick={stateClickHandler}>
        {taskState}
      </button>
    </div>
  );
}

export default TaskList;

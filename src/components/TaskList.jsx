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

function TaskList({ tasks, children, deleteTask, changeTaskState }) {
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

export default TaskList;

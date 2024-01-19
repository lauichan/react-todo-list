export default function List({ title, type, list, setlist }) {
  const workingList = list.filter((item) => item.isDone === false);
  const doneList = list.filter((item) => item.isDone === true);
  const arr = type === "working" ? workingList : doneList;

  const isDoneHandler = (event) => {
    let copyList = [...list];
    copyList[event.target.id].isDone = !(event.target.value === "true");
    setlist(copyList);
  };

  const deleteTask = (id) => {
    const deletedList = list.filter((item) => item.id !== id);
    setlist(deletedList);
  };

  return (
    <section className="list">
      <h2>{title}</h2>
      <ul className={type}>
        {arr.map(({ id, title, content, isDone }) => {
          return (
            <li className="todo" key={id}>
              <details>
                <summary>{title}</summary>
                <p>{content}</p>
              </details>
              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteTask(id)}
              >
                삭제
              </button>
              <span className="is-done">
                <label htmlFor={id}>{type === "done" ? "취소" : "완료"}</label>
                <input
                  id={id}
                  type="checkbox"
                  placeholder="완료"
                  value={isDone}
                  defaultChecked={isDone}
                  onChange={isDoneHandler}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function List({ title, type, list, setlist }) {
  let workingList = list.filter((item) => item.isDone === false);
  let doneList = list.filter((item) => item.isDone === true);
  let arr = type === "working" ? workingList : doneList;
  return (
    <section>
      <h2>{title}</h2>
      <ul className={type}>
        {arr.map((item) => {
          return (
            <li className="todo" key={item.id}>
              <input type="checkbox" placeholder="완료" />
              <details>
                <summary>{item.title}</summary>
                <p>{item.content}</p>
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default List;

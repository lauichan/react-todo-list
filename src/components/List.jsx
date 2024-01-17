function WorkingList({ list }) {
  let workingList = list.filter((item) => item.isDone === false);
  return (
    <ul className="list working">
      {workingList.map((item) => {
        return (
          <li className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

function DoneList({ list }) {
  let doneList = list.filter((item) => item.isDone === true);
  return (
    <ul className="list done">
      {doneList.map((item) => {
        return (
          <li className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

export { WorkingList, DoneList };

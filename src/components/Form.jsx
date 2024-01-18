import { useState } from "react";

function Form({ list, setlist }) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const newList = {
    id: list.length + 1,
    title,
    content,
    isDone: false,
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setlist([...list, newList]);
    setTitle("");
    setContent("");
  };

  return (
    <form className="new-list">
      <input
        type="text"
        name="title"
        placeholder="제목"
        value={title}
        onChange={titleChangeHandler}
      />
      <textarea
        type="text"
        name="content"
        placeholder="내용"
        value={content}
        onChange={contentChangeHandler}
      />
      <button type="submit" onClick={addTask}>
        추가하기
      </button>
    </form>
  );
}

export default Form;

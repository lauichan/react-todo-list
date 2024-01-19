import { useState } from "react";

export default function Form({ list, setlist }) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const newList = {
    id: list.length,
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setlist([...list, newList]);
    setTitle("");
    setContent("");
  };

  return (
    <form className="new-list" onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="title"
        placeholder="제목"
        value={title}
        onChange={titleChangeHandler}
        required
      />
      <textarea
        type="text"
        name="content"
        placeholder="내용"
        value={content}
        onChange={contentChangeHandler}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}

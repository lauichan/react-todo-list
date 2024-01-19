import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title, content);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={getTitle}
        placeholder="제목"
        required
      ></input>
      <textarea
        type="text"
        value={content}
        onChange={getContent}
        placeholder="내용"
        required
      ></textarea>
      <button type="submit">할 일 추가</button>
    </form>
  );
}

export default TaskForm;

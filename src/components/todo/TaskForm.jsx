function TaskForm({ addTask }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(event.target.title.value, event.target.content.value);
    event.target.reset();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" required></input>
      <textarea type="text" name="content" placeholder="내용" required></textarea>
      <button type="submit">할 일 추가</button>
    </form>
  );
}

export default TaskForm;

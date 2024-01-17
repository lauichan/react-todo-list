function Header() {
  return (
    <header>
      <h1>
        <a href="/">Todo List</a>
      </h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <a className="github" href="https://github.com/lauichan/react-todo-list">
        Github Repository
      </a>
    </footer>
  );
}

export { Header, Footer };

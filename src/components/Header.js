import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerH1}>TodoList</h1>
      <nav>
        <ul>Home</ul>
        <ul>About</ul>
      </nav>
    </header>
  );
}

export default Header;

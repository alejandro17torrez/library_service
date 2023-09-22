const Header = () => {
  return (
    <header>
      <h1>Library App</h1>
      <hr />
      <div className="nav d-flex justify-content-between">
        <a href="/" className="link">
          Books List
        </a>
        <a href="/add" className="link">
          Add Book
        </a>
        <a href="/login" className="link">
          Sign In
        </a>
        <a href="/register" className="link">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;

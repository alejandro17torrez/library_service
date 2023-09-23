import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { state } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header>
      <h1>Library App</h1>
      <hr />
      <div className="nav d-flex justify-content-between">
        <a href="/" className="link">
          Books List
        </a>
        {state.token && (
          <a href="/add" className="link">
            Add Book
          </a>
        )}
        {!state.token && (
        <a href="/login" className="link">
          Sign In
        </a>
        )}
        <a href="/register" className="link">
          Sign Up
        </a>
        {state.token && (
          <>
            <span>
              {state.token.user.username}
            </span>
            <a href="/" onClick={() => logout()} className="link">
              Logout
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

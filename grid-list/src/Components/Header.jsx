function Header({ view, setView }) {
  return (
    <nav className="navbar">

      <div className="company">MyCompany</div>

      <div className="toggle-container">
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          Grid
        </button>

        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}
        >
          List
        </button>
      </div>

    </nav>
  );
}

export default Header;

import "./input.css";

const Input = ({ search, setSearch, func }) => {
  return (
    <div className="input-block">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") func();
        }}
        type="text"
        className="input"
        placeholder="here your todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="button-block">
        <button onClick={func} className="btn">
          Save Todo
        </button>
      </div>
    </div>
  );
};

export default Input;

import "./input.css";

const Input = ({ search, setSearch, addTodo }) => {
  return (
    <div className="input-block">
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") addTodo();
        }}
        type="text"
        className="input"
        placeholder="here your todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="button-block">
        <button onClick={addTodo} className="btn">
          Save Todo
        </button>
      </div>
    </div>
  );
};

export default Input;

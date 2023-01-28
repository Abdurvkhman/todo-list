import { useState } from "react";
import "./App.css";
import Input from "./input/Input";
import SavedTodo from "./saved-todo/SavedTodo";

function App() {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([{ name: search, id: Date.now() }, ...todo]);
    setSearch("");
  };

  const deleteItem = (id) => {
    setTodo(todo.filter((i) => i.id !== id));
  };

  return (
    <div className="app">
      <Input addTodo={addTodo} search={search} setSearch={setSearch} />
      <SavedTodo
        deleteItem={deleteItem}
        todo={todo}
        setTodo={setTodo}
        search={search}
      />
    </div>
  );
}

export default App;

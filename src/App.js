import { useState } from "react";
import "./App.css";
import Input from "./input/Input";
import SavedTodo from "./saved_todo/SavedTodo";

function App() {
  const [search, setSearch] = useState("");
  const [arr, setArr] = useState([]);

  const func = () => {
    setArr([{ name: search, id: Date.now() }, ...arr]);
    setSearch("");
  };

  const deleteItem = (id) => {
    setArr(arr.filter((i) => i.id !== id));
  };

  return (
    <div className="app">
      <Input func={func} search={search} setSearch={setSearch} />
      <SavedTodo
        deleteItem={deleteItem}
        arr={arr}
        setArr={setArr}
        search={search}
      />
    </div>
  );
}

export default App;

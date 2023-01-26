import "./saved-todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SavedTodo = ({ arr, deleteItem }) => {
  return (
    <>
      {arr.map((item) => (
        <div className="saved-block">
          <p className="saved-block-text">{item.name}</p>
          <div className="icon-block">
            <FontAwesomeIcon
              icon={faTrash}
              className="icon"
              onClick={() => {
                deleteItem(item.id);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default SavedTodo;

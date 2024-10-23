import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "", content: "", checked: false});
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue.content}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      <button className="submit">Add task</button>
    </form>
  );
};

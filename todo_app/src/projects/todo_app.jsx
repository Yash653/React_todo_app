import { useState } from "react";
import "./todo_app.css";
import { TodoTime } from "../components/TodoTime";
import { Todolist } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
const todoKey = "reactTodo";
const TodoApp = () => {
  const [task, setTask] = useState(() => {
    const raw = localStorage.getItem(todoKey);
    if (!raw) return [];
    return JSON.parse(raw);
  }); //() => {
  //   const rawTodo = localStorage.getItem(todoKey);
  //   if (!rawTodo) return [];
  //return JSON.parse(rawTodo);

  //Add Todo To local Storage
  localStorage.setItem(todoKey, JSON.stringify(task));

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    //to check if the input field is empty or not
    if (!content) return;
    // to check if the data is already existing or not
    //  if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curElem) => curElem.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);
  };

  //detete todo list
  const hadleDeletetodo = (value) => {
    const updateTask = task.filter((curElem) => curElem.content !== value);
    setTask(updateTask);
  };

  const clearTodo = () => {
    setTask([]);
  };

  // Handle Checked Todo
  const handleCheckedtodo = (yash) => {
    const updatedTask = task.map((curElem) => {
      if (curElem.content === yash) {
        return { ...curElem, checked: !curElem.checked };
      } else {
        return curElem;
      }
    });
    setTask(updatedTask);
  };
  return (
    <>
      <section className="todo_app">
        <h1>Todo list App</h1>
        <TodoTime />
        <TodoForm onAddTodo={handleFormSubmit} />
        <div className="todo-list">
          <ul>
            {task.map((curElem) => {
              return (
                <Todolist
                  key={curElem.id}
                  data={curElem.content}
                  checked={curElem.checked}
                  onHandleDeleteTodo={hadleDeletetodo}
                  onHandldCheckedTodo={handleCheckedtodo}
                />
              );
            })}
          </ul>
        </div>
        <button className="danger" onClick={clearTodo}>
          Clear All
        </button>
      </section>
    </>
  );
};
export default TodoApp;

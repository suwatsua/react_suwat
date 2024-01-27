import { FC, useState } from "react";

const Counter: FC = () => {
  const [text, dataMessage] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleAddTask = () => {
    if (message !== "") {
      dataMessage([...text, message]);
      setMessage("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const DeletedTask = [...text];
    DeletedTask.splice(index, 1);
    dataMessage(DeletedTask);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={message} onChange={handleTask} />
      <button onClick={handleAddTask}>Add task</button>
      &nbsp;&nbsp;
      <ul>
        {text.map((text, index) => (
          <li key={index}>
            {text}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create task
  const addTask = async () => {
    if (!title) return;
    await axios.post(API_URL, { title });
    setTitle("");
    fetchTasks();
  };

  // Toggle complete
  const toggleTask = async (id, completed) => {
    await axios.put(`${API_URL}/${id}`, {
      completed: !completed,
    });
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Dashboard</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
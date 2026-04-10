// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Dashboard.css";

// function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [time, setTime] = useState("");
//   const [priority, setPriority] = useState("low");
//   const [editId, setEditId] = useState(null);

//   const token = localStorage.getItem("token");

//   // 🔄 Load tasks
// //   const loadTasks = async () => {
// //     const res = await axios.get("http://localhost:5000/api/tasks", {
// //       headers: { authorization: token }
// //     });
// //     setTasks(res.data);
// //   };

// //   useEffect(() => {
// //     loadTasks();
// //   }, []);
// // const loadTasks = async () => {
// //   try {
// //     const res = await axios.get("http://127.0.0.1:5000/api/tasks", {
// //       headers: { authorization: token }
// //     });
// //     setTasks(res.data);
// //   } catch (err) {
// //     console.log(err);
// //     alert("Error loading tasks");
// //   }
// // };
// const loadTasks = async () => {
//   try {
//     const res = await axios.get("http://127.0.0.1:5000/api/tasks", {
//       headers: { authorization: token }
//     });

//     console.log("API Response:", res.data); // 👈 ADD THIS

//     setTasks(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
//   // ➕ Add task
// //   const addTask = async () => {
// //     await axios.post(
// //       "http://localhost:5000/api/tasks",
// //       { title, time },
// //       { headers: { authorization: token } }
// //     );
// //     setTitle("");
// //     setTime("");
// //     loadTasks();
// //   };
// // const addTask = async () => {
// //   if (!title || !time) {
// //     alert("Enter title and time");
// //     return;
// //   }

// //   try {
// //     await axios.post(
// //       "http://127.0.0.1:5000/api/tasks",
// //       { title, time },
// //       { headers: { authorization: token } }
// //     );

// //     setTitle("");
// //     setTime("");
// //     loadTasks();
// //   } catch (err) {
// //     console.log(err);
// //     alert("Error adding task");
// //   }
// // };

// const addTask = async () => {
//   if (!title || !time) {
//     alert("Enter all fields");
//     return;
//   }

//   try {
//     if (editId) {
//       // ✏️ UPDATE
//       await axios.put(
//         `http://127.0.0.1:5000/api/tasks/${editId}`,
//         { title, time, priority },
//         { headers: { authorization: token } }
//       );
//       setEditId(null);
//     } else {
//       // ➕ ADD
//       await axios.post(
//         "http://127.0.0.1:5000/api/tasks",
//         { title, time, priority },
//         { headers: { authorization: token } }
//       );
//     }

//     setTitle("");
//     setTime("");
//     setPriority("low");
//     loadTasks();
//   } catch (err) {
//     alert("Error saving task");
//   }
// };


//   // ❌ Delete task
// //   const deleteTask = async (id) => {
// //     await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
// //       headers: { authorization: token }
// //     });
// //     loadTasks();
// //   };
// const deleteTask = async (id) => {
//   try {
//     await axios.delete(`http://127.0.0.1:5000/api/tasks/${id}`, {
//       headers: { authorization: token }
//     });
//     loadTasks();
//   } catch (err) {
//     console.log(err);
//     alert("Error deleting task");
//   }
// };


// const toggleComplete = async (task) => {
//   try {
//     await axios.put(
//       `http://127.0.0.1:5000/api/tasks/${task._id}`,
//       { ...task, isCompleted: !task.isCompleted },
//       { headers: { authorization: token } }
//     );
//     loadTasks();
//   } catch (err) {
//     console.log(err);
//   }
// };

//   // 🔊 Voice Reminder
//   const speak = (text) => {
//     const msg = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(msg);
//   };

//   const editTask = (task) => {
//   setTitle(task.title);
//   setTime(task.time);
//   setPriority(task.priority);
//   setEditId(task._id);
// };

//   // ⏰ Check time every second
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const currentTime = new Date().toLocaleTimeString([], {
// //         hour: "2-digit",
// //         minute: "2-digit"
// //       });

// //       tasks.forEach((task) => {
// //         if (task.time === currentTime) {
// //           speak(`Time to study ${task.title}`);
// //         }
// //       });
// //     }, 60000);

// //     return () => clearInterval(interval);
// //   }, [tasks]);
// useEffect(() => {
//   const interval = setInterval(() => {
//     const now = new Date();
//     const currentTime = now.toTimeString().slice(0,5); // HH:MM format

//     tasks.forEach((task) => {
//       if (task.time === currentTime) {
//         speak(`Time to study ${task.title}`);
//       }
//     });
//   }, 60000);

//   return () => clearInterval(interval);
// }, [tasks]);
//   return (
//     <div className="dashboard">
//       <h2>Study Dashboard</h2>

//       {/* Add Task */}
//       <div className="task-input">
//         <input
//           placeholder="Task Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />

//         <button onClick={addTask}>Add Task</button>
//       </div>

//       {/* Task List */}
//       <div className="task-list">
//         {tasks.map((task) => (
//           <div className="task" key={task._id}>
//             <span>{task.title} - {task.time}</span>
//             <button onClick={() => deleteTask(task._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("low");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  // 🔄 Load tasks
  const loadTasks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/tasks", {
        headers: { authorization: token }
      });

      console.log("API Response:", res.data);

      if (Array.isArray(res.data)) {
        setTasks(res.data);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.log(err);
      alert("Error loading tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // ➕ Add / Update task
  const addTask = async () => {
    if (!title || !time) {
      alert("Enter all fields");
      return;
    }

    try {
      if (editId) {
        // ✏️ UPDATE
        await axios.put(
          `http://127.0.0.1:5000/api/tasks/${editId}`,
          { title, time, priority },
          { headers: { authorization: token } }
        );
        setEditId(null);
      } else {
        // ➕ ADD
        await axios.post(
          "http://127.0.0.1:5000/api/tasks",
          { title, time, priority },
          { headers: { authorization: token } }
        );
      }

      setTitle("");
      setTime("");
      setPriority("low");
      loadTasks();
    } catch (err) {
      console.log(err);
      alert("Error saving task");
    }
  };

  // ❌ Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/tasks/${id}`, {
        headers: { authorization: token }
      });
      loadTasks();
    } catch (err) {
      console.log(err);
      alert("Error deleting task");
    }
  };

  // ✔ Complete toggle
  const toggleComplete = async (task) => {
    try {
      await axios.put(
        `http://127.0.0.1:5000/api/tasks/${task._id}`,
        { ...task, isCompleted: !task.isCompleted },
        { headers: { authorization: token } }
      );
      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // ✏️ Edit
  const editTask = (task) => {
    setTitle(task.title);
    setTime(task.time);
    setPriority(task.priority);
    setEditId(task._id);
  };

  // 🔊 Voice Reminder
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  // ⏰ Reminder system
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toTimeString().slice(0, 5);

      tasks.forEach((task) => {
        if (task.time === currentTime && !task.isCompleted) {
          speak(`Time to study ${task.title}`);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="dashboard-container">
        <div className="dashboard-box">

      {/* Header */}
      <div className="header">
        <h2>📊 Study Planner</h2>
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* Add Task */}
      <div className="task-box">
        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button onClick={addTask}>
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* Task List */}
      <div className="task-list">
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              className={`task-card ${task.priority} ${
                task.isCompleted ? "done" : ""
              }`}
              key={task._id}
            >
              <div>
                <h4>{task.title}</h4>
                <p>{task.time}</p>
              </div>

              <div className="actions">
                <button onClick={() => toggleComplete(task)}>✔</button>
                <button onClick={() => editTask(task)}>✏️</button>
                <button onClick={() => deleteTask(task._id)}>❌</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-task">No tasks yet 🚀</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
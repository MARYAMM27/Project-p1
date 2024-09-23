import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase'; // Import your Firestore instance
import '../Styles/ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = collection(db, 'ToDoList');
      const tasksSnapshot = await getDocs(tasksCollection);
      const tasksList = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(tasksList);
    };

    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async () => {
    if (!newTask.trim()) {
      setErrorMessage('Task cannot be empty');
      return;
    }

    try {
      if (editingTask) {
        const taskDocRef = doc(db, 'ToDoList', editingTask.id);
        await updateDoc(taskDocRef, { text: newTask });
        setTasks((prevTasks) => prevTasks.map((task) => (task.id === editingTask.id
          ? { ...task, text: newTask }
          : task)));
        setEditingTask(null);
      } else {
        const taskData = { text: newTask, completed: false };
        const docRef = await addDoc(collection(db, 'ToDoList'), taskData);
        setTasks((prevTasks) => [
          ...prevTasks,
          { id: docRef.id, ...taskData },
        ]);
      }
      setNewTask('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error saving task');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'ToDoList', id));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      setErrorMessage('Error deleting task');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask(task.text);
  };

  const handleToggleComplete = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const taskDocRef = doc(db, 'ToDoList', task.id);
    await updateDoc(taskDocRef, { completed: updatedTask.completed });

    setTasks((prevTasks) => prevTasks.map((t) => (t.id === task.id ? updatedTask : t)));
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder={editingTask ? 'Edit task' : 'Add a new task'}
        />
        <button type="button" onClick={handleAddOrUpdateTask}>
          {editingTask ? 'Update' : 'Add'}
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button type="button" onClick={() => handleEditTask(task)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

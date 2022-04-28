// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header';
// import SignupForm from './Signup';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddTask from './Components/AddTask';
import Subcategories from "./Components/blocks/Subcategories/Subcategories";
import Login from "./Components/login/Login";
import Footer from "./Components/footer/Footer";
import Signup from "./Components/signup/Signup";
import Categories from "./Components/blocks/Categories/Categories";

import Navbar from "./Components/navbar/Navbar";
import Channel from "./Components/blocks/Channel/Channel";

import Landpage from "./Components/signup/Landpage";
import Animation1 from "./Components/Animation/Animation1";
import Animation2 from "./Components/Animation/Animation2";
import XmltoJson from "./XmltoJson";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  // const [counter, setCounter] = useState(0)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Screen 1",
      day: "aj",
      reminder: true,
    },
    {
      id: 2,
      text: "Screen 2",
      day: "kl",
      reminder: true,
    },
    {
      id: 3,
      text: "Screen 3",
      day: "prsu",
      reminder: false,
    },
  ]);

 

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App" /*'container'*/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Animation1 />} />
          <Route exact path="/landpage" element={<Landpage />} />
          <Route exact path="/signup/:email" element={<Signup />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/subcategories" element={<Subcategories />} />
          <Route exact path="/channel" element={<Channel />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/a2" element={<Animation2 />} />
          <Route exact path="/x2j" element={<XmltoJson />} />
        </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/*<Header title={'Khassi Project'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length >0 ? (<SignupForm tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Show') }*/}
    </div>
  );
}

export default App;

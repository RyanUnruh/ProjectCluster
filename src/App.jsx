import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import TaskList from "./components/TaskList";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;

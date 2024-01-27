import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

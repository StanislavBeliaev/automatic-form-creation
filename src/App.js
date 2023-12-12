import React,{useState, useEffect} from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form } from "./components/Form";
import "./App.css";
import { MainPage } from "./components/MainPage";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;

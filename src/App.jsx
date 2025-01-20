import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./component/NavBar"
import Home from "./component/Home"
import Single from "./component/Single"
function App() {
    

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/single/:id" element={<Single/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

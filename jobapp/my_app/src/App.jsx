import './App.css'
import { useState } from "react"
import { Route, Routes}from"react-router-dom"
import Navbar from './module/Navbar'
import Login from './module/Login'
import Signup from './module/Signup'
import Home from './module/Home'




function App() {
  const [count, setCount] = useState(0)

  return  (
    <>
    <Navbar />
        <Routes>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/home" element={<Home />}/>
          </Routes>

    </>
  )
}

export default App
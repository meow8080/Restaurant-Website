import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from "./components/About";
import Reservations from "./components/Reservation";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  )
}

export default App
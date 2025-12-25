import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Seaside Heaven</h1>

        <div className="hidden md:flex gap-6">
          <Link to="/home" className="hover:text-violet-400">Home</Link>
          <Link to="/menu" className="hover:text-violet-400">Menu</Link>
          <Link to="/about" className="hover:text-violet-400">About</Link>
          <Link to="/reservations" className="hover:text-violet-400">Reservations</Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>⋮</button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-4 rounded">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/reservations" onClick={() => setOpen(false)}>Reservations</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

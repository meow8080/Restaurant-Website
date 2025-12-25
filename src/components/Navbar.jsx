import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black max-w-auto cursor-pointer font-bold text-white shadow-md px-6 py-4 flex flex-row justify-between items-center">
      <h1 className="text-3xl">SeaSide Heaven</h1>
      <div className="flex justify-end gap-8">
        <Link to="/home" className="hover:text-violet-400">Home</Link>
        <Link to="/menu" className="hover:text-violet-400">Menu</Link>
        <Link to="/about" className="hover:text-violet-400">About</Link>
        <Link to="/reservations" className="hover:text-violet-400">Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;

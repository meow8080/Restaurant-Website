import { useState } from "react";

function Reservations() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleTimeChange = (e) => {
    const val = e.target.value; 
    setTime(val); 
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + 
                        now.getMinutes().toString().padStart(2, '0');

    if (date === today && val < currentTime && val !== "") {
      setError("Note: This time has already passed.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      setError("Please fill in all fields.");
      return;
    }
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + 
                        now.getMinutes().toString().padStart(2, '0');
    
    if (date === today && time < currentTime) {
      setError("Cannot book a reservation in the past.");
      return;
    }

    alert(`Success! Reserved for ${name} at ${time}`);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center fade-in justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-amber-950 text-center mb-6">Reserve a Table</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          <input
            type="time"
            value={time}
            onInput={handleTimeChange}
            onChange={handleTimeChange} 
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button type="submit" className="bg-amber-900 text-white font-semibold px-6 py-3 rounded-lg w-full">
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservations;

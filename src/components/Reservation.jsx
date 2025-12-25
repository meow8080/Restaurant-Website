import { useState } from "react";

function Reservations() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const validateDateTime = (selectedDate, selectedTime) => {
    if (!selectedDate || !selectedTime) return true;

    const now = new Date();
    const currentTimeString = now.toTimeString().slice(0, 5); 

    if (selectedDate === today && selectedTime < currentTimeString) {
      setError("Please select a future time.");
      return false;
    }
    
    setError("");
    return true;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (newDate < today) {
      setError("Please select a future date.");
    } else {
      setError("");
      if (time) validateDateTime(newDate, time);
    }
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime); 
    validateDateTime(date, newTime); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateDateTime(date, time)) return;

    if (!name || !date || !time) {
      setError("All fields are required.");
      return;
    }

    alert(`Reservation booked for ${name} on ${date} at ${time}`);
    setName(""); setDate(""); setTime(""); setError("");
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-amber-950 text-center mb-6">Reserve a Table</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 border focus:ring-2 focus:ring-amber-900 outline-none"
            required
          />

          <input
            type="date"
            value={date}
            min={today}
            onChange={handleDateChange}
            className="w-full p-3 rounded-lg bg-gray-100 border outline-none"
            required
          />

          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            onBlur={(e) => validateDateTime(date, e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 border outline-none"
            required
          />

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="bg-amber-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-950 transition-all w-full active:scale-95"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservations;

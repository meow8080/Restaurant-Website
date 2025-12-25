import { useState } from "react";

function Reservations() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toTimeString().slice(0, 5);
  const handleDateChange = (value) => {
    setDate(value);
    setTime("");

    if (value < today) {
      setError("Please select a future date.");
    } else {
      setError("");
    }
  };
  const handleTimeChange = (value) => {
    setTime(value);

    if (date === today && value < currentTime) {
      setError("Please select a future time.");
    } else {
      setError("");
    }
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (date < today) {
      setError("Please select a future date.");
      return;
    }

    if (date === today && time < currentTime) {
      setError("Please select a future time.");
      return;
    }

    alert(`Reservation booked for ${name} on ${date} at ${time}`);

    setName("");
    setDate("");
    setTime("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-amber-950 text-center mb-6">
          Reserve a Table
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
            required
          />
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
            required
          />
          <input
            type="time"
            value={time}
            step="60"
            min={date === today ? currentTime : "00:00"}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
            required
          />
          <button type="submit" disabled={!!error} className={`w-full font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${error ? "bg-gray-400 cursor-not-allowed" : "bg-amber-900 text-white hover:bg-red-950 hover:scale-105 active:scale-95"}`}>Submit Reservation</button>
        </form>
      </div>
    </div>
  );
}

export default Reservations;

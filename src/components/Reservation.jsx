import { useState } from "react";

function Reservations() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    if (selectedDate < today) {
      setError("Please select a future date.");
    } else {
      setError("");
    }
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    if (!date) {
      setTime(selectedTime);
      return;
    }
    if (date === today) {
      const currentTime = new Date().toTimeString().slice(0, 5);

      if (selectedTime < currentTime) {
        setError("Please select a future time.");
        return;
      }
    }

    setTime(selectedTime);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time) {
      setError("All fields are required.");
      return;
    }

    alert(`Reservation booked for ${name} on ${date} at ${time}`);
    setName("");
    setDate("");
    setTime("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
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
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          <input
            type="date"
            value={date}
            min={today}
            onChange={handleDateChange}
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          <input
            type="time"
            onChange={handleTimeChange}
            className="w-full p-3 rounded-lg bg-gray-100"
            required
          />

          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

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

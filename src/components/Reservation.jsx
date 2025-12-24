import { useState } from "react";

function Reservations() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation booked for ${name} on ${date} at ${time}`);
    };

    return (
        <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 fade-in">
        
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            
                <h1 className="text-3xl font-bold text-amber-950 text-center mb-6">Reserve a Table</h1>

                <form 
                    onSubmit={handleSubmit} className="space-y-4">
                    
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100 text-shadow-black hover:bg-gray-200"required/>

                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100 text-shadow-black hover:bg-gray-200" required/>

                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100 text-shadow-black hover:bg-gray-200" required/>
                    <button type="submit" className="bg-amber-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-950 hover:scale-105 transition-all duration-300 active:scale-95">Submit Reservation</button>
                </form>
            </div>
        </div>
    );
}

export default Reservations;
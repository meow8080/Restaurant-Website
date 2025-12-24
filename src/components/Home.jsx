import logo from "../assets/Logo.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen bg-gray-300 px-4 py-7 fade-in">
            <div className="flex flex-col items-center gap-12 py-7">
                <img src={logo} alt="Restaurant Logo"   className="w-36 h-36 rounded-full object-cover shadow-lg"/>
                <div className="text-center md:text-center md:flex-row max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                        Where Flavor <br /> Meets Tradition
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Welcome to <span className="font-medium text-gray-800">SeaSide Heaven</span>, 
                        where authentic recipes, fresh ingredients, and warm hospitality 
                        come together to create an unforgettable dining experience.
                    </p>
                    <div className="flex flex-row gap-7 justify-around">
                        <button onClick={() => navigate("/menu")} className="hover:scale-105 active:scale-95 bg-amber-900 text-white font-semibold hover:bg-red-950 duration-300 rounded-lg px-6 py-3">View Menu</button>
                        <button onClick={() => navigate("/about")} className="hover:scale-105 active:scale-95 bg-amber-900 text-white font-semibold hover:bg-red-950 duration-300 rounded-lg px-6 py-3">About Us</button>
                        <button onClick={() => navigate("/reservations")} className="hover:scale-105 active:scale-95 bg-amber-900 text-white font-semibold hover:bg-red-950 duration-300 rounded-lg px-6 py-3">Reserve Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
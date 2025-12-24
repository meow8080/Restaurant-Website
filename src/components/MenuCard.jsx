function MenuCard({ item }) {
  return (
    <div className={`relative p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${item.special ? "border-2 border-yellow-400 bg-yellow-50 text-gray-900 shadow-yellow-300" : "bg-fuchsia-50"}`}>
      
      {item.special && (<span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">Chef's Special ⭐</span>)}

      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

      <p className="text-sm mb-4 opacity-90">{item.description}</p>

      <p className="text-lg font-bold text-red-500">{item.price}</p>
    </div>
  );
}

export default MenuCard;

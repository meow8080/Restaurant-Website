import MenuCard from "./MenuCard"

const menuItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes cooked in a rich tomato-butter gravy",
    price: "₹349",
    special: true,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella",
    price: "₹299",
    special: true,
  },
  {
    id: 3,
    name: "Veg Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and spices",
    price: "₹279",
    special: false,
  },
  {
    id: 4,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy fried bread",
    price: "₹249",
    special: true,
  },
  {
    id: 5,
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with fresh vegetables and sauces",
    price: "₹199",
    special: false,
  },
  {
    id: 6,
    name: "Paneer Tikka",
    description: "Grilled paneer marinated with Indian spices",
    price: "₹329",
    special: true,
  },
  {
    id: 7,
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala",
    price: "₹179",
    special: false,
  },
  {
    id: 8,
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy Indo-Chinese sauce",
    price: "₹229",
    special: false,
  },
  {
    id: 9,
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in a creamy gravy",
    price: "₹299",
    special: true,
  },
  {
    id: 10,
    name: "Cheese Garlic Bread",
    description: "Toasted bread topped with garlic butter and melted cheese",
    price: "₹159",
    special: false,
  },
  {
    id: 11,
    name: "Veg Burger",
    description: "Crispy veg patty with fresh lettuce and house sauce",
    price: "₹189",
    special: false,
  },
  {
    id: 12,
    name: "Pav Bhaji",
    description: "Spicy mashed vegetables served with buttered pav",
    price: "₹219",
    special: false,
  },
  {
    id: 13,
    name: "Shahi Paneer",
    description: "Royal creamy paneer curry with cashew gravy",
    price: "₹369",
    special: true,
  },
  {
    id: 14,
    name: "Veg Fried Rice",
    description: "Flavorful rice tossed with vegetables and sauces",
    price: "₹209",
    special: false,
  },
  {
    id: 15,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie served with rich chocolate sauce",
    price: "₹199",
    special: false,
  },
];


function Menu() {
  return (
    <div className="min-h-screen px-6 py-10 fade-in bg-gray-300">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Menu
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}



export default Menu
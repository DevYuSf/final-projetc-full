import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-6 shadow-md">
   <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <ul className="flex flex-col gap-3">
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Dashboard</li>
        <Link to="/product"><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Product</li></Link>
       <Link to="/registerproduct"><li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Add Product</li></Link>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Customer</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Order</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Add Order</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Reports</li>
        <li className="p-2 rounded-md hover:bg-gray-200 cursor-pointer transition">Setting</li>
      </ul>
    </div>
  );
}

export default Dashboard;

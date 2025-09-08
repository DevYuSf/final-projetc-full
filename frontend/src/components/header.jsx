import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-800">BookHaven</h1>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <Link to="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></Link>
                        <li className="hover:text-blue-500 cursor-pointer">Categories</li>
                        <li className="hover:text-blue-500 cursor-pointer">Best Sellers</li>
                        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                    </ul>
                </nav>

                {/* Buttons */}
                <div className="flex space-x-3">
                    <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <i className="fa-solid fa-user"></i> LogIn
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md">
                        Register Customers
                    </button>
                    <Link to="carts"><button className="flex items-center gap-1 px-4 py-2 bg-[#847837] text-white rounded-md">
                        <i className="fa-solid fa-cart-shopping"></i> Cart
                    </button></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

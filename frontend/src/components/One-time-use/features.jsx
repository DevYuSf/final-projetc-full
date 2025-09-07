import axios from "axios"
import { useEffect, useState } from "react"

function Features() {
    const [data, setData] = useState([])

    const handleReadData = () => {
        axios.get("http://localhost:5000/read/product").then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        handleReadData()
    }, [])

    return (
        <div className="flex bg-gray-100 min-h-screen p-6 gap-8">
            {/* Sidebar Filter */}
            <div className="w-64 bg-white shadow-md rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2">
                        <input name="category" type="radio" className="w-4 h-4 text-blue-600" />
                        <span>Smart-Phone</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input name="category" type="radio" className="w-4 h-4 text-blue-600" />
                        <span>Tv</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input name="category" type="radio" className="w-4 h-4 text-blue-600" />
                        <span>Laptop</span>
                    </label>

                    <label className="flex items-center gap-2">
                        <input name="category" type="radio" className="w-4 h-4 text-blue-600" />
                        <span>Desk-Top</span>
                    </label>
                </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Featured Products
                </h2>

                <div className="grid grid-cols-3 gap-8">
                    {data.slice(0,3).map((items, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center gap-4 hover:shadow-2xl transition"
                        >
                            {/* Image */}
                            <img
                                src={`http://localhost:5000/allImages/${items.prImage}`}
                                alt={items.name}
                                className="w-40 h-40 object-cover rounded-md"
                            />

                            {/* Name & Status */}
                            <div className="flex justify-between w-full">
                                <h4 className="text-lg font-semibold text-gray-800">{items.name}</h4>
                                <p
                                    className={`mt-1 text-sm font-medium ${
                                        items.status === "Available"
                                            ? "text-green-600"
                                            : "text-red-500"
                                    }`}
                                >
                                    {items.status}
                                </p>
                            </div>

                            {/* Price & Button */}
                            <div className="flex justify-between items-center w-full mt-2">
                                <h4 className="text-lg font-bold text-blue-600">${items.price}</h4>
                                <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition">
                                    Add
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features

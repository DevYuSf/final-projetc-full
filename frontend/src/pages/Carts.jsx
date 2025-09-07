function Carts() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Shopping Cart */}
        <div className="col-span-2 bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Shopping Cart</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2">PRODUCT DETAILS</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img
                    src="https://inventstore.in/wp-content/uploads/2024/09/68-1.webp"
                    alt="Iphone 16"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">Iphone 16</h3>
                    <p className="text-sm text-purple-600">Smart Phone</p>
                    <button className="text-red-500 text-sm mt-1">Remove</button>
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </td>
                <td className="text-gray-700">$1600</td>
                <td className="font-semibold">$1600</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-4">
            <p className="text-gray-600">ITEMS</p>
            <p className="font-medium">10</p>
          </div>

          <h4 className="mb-2 text-sm font-medium">Shipping</h4>
          <select className="w-full border p-2 rounded mb-4">
            <option>Choose delivery option</option>
            <option>Standard - $20</option>
            <option>Express - $40</option>
          </select>

          <h4 className="mb-2 text-sm font-medium">Promo Code</h4>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter your code"
              className="flex-1 border p-2 rounded-l"
            />
            <button className="bg-red-500 text-white px-4 rounded-r">
              Apply
            </button>
          </div>

          <div className="flex justify-between font-semibold mb-4">
            <h3>TOTAL COST</h3>
            <h4>$1700</h4>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;

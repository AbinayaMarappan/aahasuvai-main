import { useState } from "react";

const tabs = [
  { label: "Pending Orders", icon: "fas fa-shopping-cart" },
  { label: "Orders", icon: "fas fa-shopping-basket" },
  { label: "Manage addresses", icon: "fas fa-map-marker-alt" },
  { label: "Favourites", icon: "fas fa-heart" },
//   { label: "Subscription", icon: "fas fa-award" },
];

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("Pending Orders");

  return (
    <div className="min-h-screen bg-[#fff4b3] py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#003b32] text-white py-6">
          <ul className="space-y-4 px-4">
            {tabs.map((tab) => (
              <li
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
                  activeTab === tab.label
                    ? "bg-white text-[#003b32] font-semibold"
                    : "hover:bg-[#004d3d]"
                }`}
              >
                <i className={`${tab.icon}`}></i>
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>

          {/* Example content for Pending Orders */}
          {activeTab === "Pending Orders" && (
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/pending-orders.png"
                alt="No orders"
                className="w-64 mb-4"
              />
              <p className="text-gray-500 mb-6">No past orders found</p>
              <button className="bg-[#003b32] text-white px-6 py-2 rounded-full hover:bg-[#005547]">
                LOGIN TO SEE PAST ORDERS
              </button>
            </div>
          )}

          {/* Add similar blocks for other tabs if needed */}
        </main>
      </div>
    </div>
  );
}

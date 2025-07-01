// import { useState, useEffect } from "react";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { useLocation } from "wouter";
// import { Link } from "wouter";
// import { useCart } from "@/context/CartContext";
// import Logo from "../assets/Slider11.png";
// import { Link } from "wouter";



// export default function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [, navigate] = useLocation();
//   const { getTotalItems } = useCart();
//   const cartCount = getTotalItems();

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchInput.trim()) {
//       navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
//       setShowSearch(false);
//       setSearchInput("");
//     }
//   };

//   return (
//     // <nav className="bg-white shadow-md sticky top-0 z-40 transition-all duration-300">
//     <nav style={{ backgroundColor: "#FFF6E7" }} className="shadow-md sticky top-0 z-40 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center space-x-10 w-full">
//             <div className="w-16 h-16">
//               <img src={Logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
//             </div>

//             <div className="hidden md:flex items-center space-x-6">

//               <button
//   onClick={() => navigate("/")}
//   className="text-gray-700 hover:text-orange-600">
//   Home
// </button>
// <button
//   onClick={() => {
//     navigate("/contact");
//     setIsMobileMenuOpen(false);
//   }}
//   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
// >
//   Contact
// </button>
// <button
//   onClick={() => navigate("/offers")}
//   className="text-gray-700 hover:text-orange-600"
// >
//   Offers
// </button>

//               {/* <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-orange-600">Home</button> */}
//               {/* <button onClick={() => scrollToSection("products")} className="text-gray-700 hover:text-orange-600">Products</button>
//               <button onClick={() => scrollToSection("gallery")} className="text-gray-700 hover:text-orange-600">Gallery</button> */}
//               {/* <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-orange-600">Contact</button> */}
//             </div>
//           </div>

//           <div className="flex items-center gap-4 relative">
//             <FaSearch
//               title="Search"
//               onClick={() => setShowSearch(!showSearch)}
//               className="text-gray-700 text-xl cursor-pointer hover:text-orange-600"
//             />
//             {showSearch && (
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyDown={handleSearchSubmit}
//                 placeholder="Search..."
//                 className="absolute top-10 right-14 w-48 px-2 py-1 border rounded shadow z-50 text-sm"
//               />
//             )}

//             <Link href="/cart" className="relative">
//               <FaShoppingCart className="text-gray-700 text-xl hover:text-orange-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//           <Link href="/signin">
//   <button className="text-sm text-gray-700 hover:text-orange-600 whitespace-nowrap">
//     Sign In
//   </button>
// </Link>

//           </div>

//           <button
//             className="md:hidden text-gray-700 ml-4"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className="fas fa-bars text-xl"></i>
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden py-2 space-y-2 border-t">
//             <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Home</button>
//             {/* <button onClick={() => scrollToSection("products")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Products</button>
//             <button onClick={() => scrollToSection("gallery")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</button> */}
//             <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

//n

// import { useState } from "react";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { useLocation } from "wouter";
// import { Link } from "wouter";
// import { useCart } from "@/context/CartContext";
// import Logo from "../assets/Slider11.png";

// export default function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [location, navigate] = useLocation();
//   const { getTotalItems } = useCart();
//   const cartCount = getTotalItems();

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchInput.trim()) {
//       navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
//       setShowSearch(false);
//       setSearchInput("");
//     }
//   };

//   return (
//     <nav style={{ backgroundColor: "#FFF6E7" }} className="shadow-md sticky top-0 z-40 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center space-x-10 w-full">
//             <div className="w-16 h-14">
//               <img src={Logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
//             </div>

//             <div className="hidden md:flex items-center space-x-6">
//               {[
//                 { label: "Home", path: "/" },
//                 { label: "Contact", path: "/contact" },
//                 { label: "Offers", path: "/offers" }
//               ].map(({ label, path }) => (
//                 <button
//                   key={path}
//                   onClick={() => {
//                     navigate(path);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
//                     location === path
//                       ? "text-orange-600 border border-black"
//                       : "text-gray-700 hover:text-orange-600"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-4 relative">
//             <FaSearch
//               title="Search"
//               onClick={() => setShowSearch(!showSearch)}
//               className="text-gray-700 text-xl cursor-pointer hover:text-orange-600"
//             />
//             {showSearch && (
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyDown={handleSearchSubmit}
//                 placeholder="Search..."
//                 className="absolute top-10 right-14 w-48 px-2 py-1 border rounded shadow z-50 text-sm"
//               />
//             )}

//             <Link href="/cart" className="relative">
//               <FaShoppingCart className="text-gray-700 text-xl hover:text-orange-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             <Link href="/signin">
//               <button className="text-sm text-gray-700 hover:text-orange-600 whitespace-nowrap">
//                 Sign In
//               </button>
//             </Link>
//           </div>

//           <button
//             className="md:hidden text-gray-700 ml-4"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className="fas fa-bars text-xl"></i>
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden py-2 space-y-2 border-t">
//             {[
//               { label: "Home", id: "home" },
//               { label: "Contact", id: "contact" }
//             ].map(({ label, id }) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { useLocation } from "wouter";
// import { Link } from "wouter";
// import { useCart } from "@/context/CartContext";
// import Logo from "../assets/Slider11.png";

// export default function Navigation() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchInput, setSearchInput] = useState("");
//   const [location, navigate] = useLocation();
//   const { getTotalItems } = useCart();
//   const cartCount = getTotalItems();

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchInput.trim()) {
//       navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
//       setShowSearch(false);
//       setSearchInput("");
//     }
//   };

//   return (
//     <nav style={{ backgroundColor: "#FFF6E7" }} className="shadow-md sticky top-0 z-40 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-14">
//           <div className="flex items-center space-x-6 w-full">
//             {/* ✅ Logo - refreshes but does not highlight Home */}
//             <Link href="/?fromLogo=true">
//               <div className="w-12 h-12 cursor-pointer">
//                 <img src={Logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
//               </div>
//             </Link>

//             {/* ✅ Nav Links with no border */}
//             <div className="hidden md:flex items-center space-x-4">
//               {[
//                 { label: "Home", path: "/", key: "home" },
//                 { label: "Contact", path: "/contact", key: "contact" },
//                 { label: "Offers", path: "/offers", key: "offers" }
//               ].map(({ label, path, key }) => {
//                 const isActive = location === path && !location.includes("fromLogo");
//                 return (
//                   <button
//                     key={key}
//                     onClick={() => {
//                       navigate(path);
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className={`text-sm font-medium px-2 py-1 rounded transition-colors focus:outline-none ${
//                       isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
//                     }`}
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right icons */}
//           <div className="flex items-center gap-4 relative">
//             <FaSearch
//               title="Search"
//               onClick={() => setShowSearch(!showSearch)}
//               className="text-gray-700 text-xl cursor-pointer hover:text-orange-600"
//             />
//             {showSearch && (
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyDown={handleSearchSubmit}
//                 placeholder="Search..."
//                 className="absolute top-10 right-14 w-48 px-2 py-1 border rounded shadow z-50 text-sm"
//               />
//             )}

//             <Link href="/cart" className="relative">
//               <FaShoppingCart className="text-gray-700 text-xl hover:text-orange-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             <Link href="/signin">
//               <button className="text-sm text-gray-700 hover:text-orange-600 whitespace-nowrap focus:outline-none">
//                 Sign In
//               </button>
//             </Link>
//           </div>

//           <button
//             className="md:hidden text-gray-700 ml-4"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className="fas fa-bars text-xl"></i>
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden py-2 space-y-2 border-t">
//             {[{ label: "Home", id: "home" }, { label: "Contact", id: "contact" }].map(({ label, id }) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import Logo from "../assets/Slider11.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [location, navigate] = useLocation();
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
      setShowSearch(false);
      setSearchInput("");
    }
  };

  return (
    <nav
      style={{ backgroundColor: "#FFF6E7" }}
      className="shadow-md sticky top-0 z-40 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-6 w-full">
            {/* ✅ Logo - refreshes but does not highlight Home */}
            <Link href="/?fromLogo=true">
              <div className="w-12 h-12 cursor-pointer">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </Link>

            {/* ✅ Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              {[
                { label: "Home", path: "/", key: "home" },
                { label: "Contact", path: "/contact", key: "contact" },
                { label: "Offers", path: "/offers", key: "offers" },
              ].map(({ label, path, key }) => {
                const currentPath = new URL("http://dummy" + location).pathname;
                const isActive = currentPath === path;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      navigate(path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium px-2 py-1 rounded transition-colors focus:outline-none ${
                      isActive
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 🔍 Search | 🛒 Cart | Sign In */}
          <div className="flex items-center gap-4 relative">
            <FaSearch
              title="Search"
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-700 text-xl cursor-pointer hover:text-orange-600"
            />
            {showSearch && (
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearchSubmit}
                placeholder="Search..."
                className="absolute top-10 right-14 w-48 px-2 py-1 border rounded shadow z-50 text-sm"
              />
            )}

            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-gray-700 text-xl hover:text-orange-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href="/signin">
              <button className="text-sm text-gray-700 hover:text-orange-600 whitespace-nowrap focus:outline-none">
                Sign In
              </button>
            </Link>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-gray-700 ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 space-y-2 border-t">
            {[
              { label: "Home", id: "home" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BlogDropdown from "./BlogDropdown";
// import PageDropdown from "./PageDropdown";
// import ServiceDropDown from "./ServiceDropDown";
// import { faBars, faHeadset } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   return (
//     <nav className="py-4 ">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
//             alt="Trade Room Logo"
//             className="h-10 w-auto sm:h-12"
//           />
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white text-sm lg:text-base">
//           <li>Home</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">Membership</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">Products</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <ServiceDropDown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <PageDropdown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <BlogDropdown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             Contact
//             <FontAwesomeIcon icon={faBars} />
//           </li>
//         </ul>

//         {/* Contact Us Button */}
//         <div className="mt-4 md:mt-0">
//           <button className="px-4 py-2 md:px-8 md:py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
//             <FontAwesomeIcon icon={faHeadset} className="text-[#0E3B43] mr-2" />
//             <span className="text-black text-sm md:text-base">Contact us</span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import BlogDropdown from "./BlogDropdown";
// import PageDropdown from "./PageDropdown";
// import ServiceDropDown from "./ServiceDropDown";
// import { faBars, faHeadset } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="py-4">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
//             alt="Trade Room Logo"
//             className="h-10 w-auto sm:h-12"
//           />
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
//           </button>
//         </div>

//         {/* Navigation Links - Hidden on Mobile */}
//         <ul
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex space-x-4 lg:space-x-8 text-white text-sm lg:text-base`}
//         >
//           <li>Home</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">Membership</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">Products</li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <ServiceDropDown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <PageDropdown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             <BlogDropdown />
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">Contact</li>
//         </ul>

//         {/* Contact Us Button */}
//         <div className="mt-4 md:mt-0">
//           <button className="px-4 py-2 md:px-8 md:py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
//             <FontAwesomeIcon icon={faHeadset} className="text-[#0E3B43] mr-2" />
//             <span className="text-black text-sm md:text-base">Contact us</span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useState } from "react";
import BlogDropdown from "./BlogDropdown";
import PageDropdown from "./PageDropdown";
import ServiceDropDown from "./ServiceDropDown";
import { faBars, faHeadset, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
            alt="Trade Room Logo"
            className="h-10 w-auto sm:h-12"
          />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-white text-xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white text-sm lg:text-base">
          <li>Home</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Membership</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Products</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <ServiceDropDown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <PageDropdown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <BlogDropdown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Contact</li>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden md:block mt-2 md:mt-0">
          <button className="px-4 py-2 md:px-8 md:py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
            <FontAwesomeIcon icon={faHeadset} className="text-[#0E3B43] mr-2" />
            <span className="text-black text-sm md:text-base">Contact us</span>
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#0E3B43] text-white p-8 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <ul className="space-y-6 mt-10">
          <li>Home</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Membership</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Products</li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <ServiceDropDown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <PageDropdown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">
            <BlogDropdown />
          </li>
          <li className="cursor-pointer hover:text-[#2FFFB9]">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BlogDropdown from "./BlogDropdown";
// import PageDropdown from "./PageDropdown";
// import ServiceDropDown from "./ServiceDropDown";
// import { faHeadset } from "@fortawesome/free-solid-svg-icons";


// const Navbar = () => {
//   return (
//     <nav className=" py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img
//             src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
//             alt="Trade Room Logo"
//             className="h-12"
//           />
//         </div>

//         <ul className="flex space-x-8 text-white text-m ">
//           <li className=" cursor-pointer ">Home</li>
//           <li className="ursor-pointer hover:text-[#2FFFB9]">
//             Membership
//           </li>
//           <li className="cursor-pointer hover:text-[#2FFFB9]">
//             Products
//           </li>
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
//           </li>
//         </ul>

//         <button className="px-8 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
//           <FontAwesomeIcon icon={faHeadset} className="text-[#0E3B43] mr-2" />
//           <span className="text-black">Contact us</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogDropdown from "./BlogDropdown";
import PageDropdown from "./PageDropdown";
import ServiceDropDown from "./ServiceDropDown";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="py-4 ">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
            alt="Trade Room Logo"
            className="h-10 w-auto sm:h-12"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white text-sm lg:text-base">
          <li >Home</li>
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
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 md:px-8 md:py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
            <FontAwesomeIcon icon={faHeadset} className="text-[#0E3B43] mr-2" />
            <span className="text-black text-sm md:text-base">Contact us</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


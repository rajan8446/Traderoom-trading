/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProviderSection = ({ title, description, image }) => {
  return (
    <>
      <NavLink
        to="/"
        className="block px-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
      >
        {/* First Section: Title and Button */}
        <div className="flex justify-between items-center ">
          <h3 className="text-xl text-[#0E3B43] font-semibold">{title}</h3>
          <a href="#" className="text-blue-500 hover:text-blue-600 text-xl">
            <FaArrowRight className="text-[#0E3B43] mr-6" />
          </a>
        </div>

        {/* Second Section: Description and Image */}
        <div className="flex justify-between items-start mt-4">
          <p className="text-[#9a9a9a] flex-grow">{description}</p>
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg ml-4"
          />
        </div>
      </NavLink>
    </>
  );
};

export default ProviderSection;

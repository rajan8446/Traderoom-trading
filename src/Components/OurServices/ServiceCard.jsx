/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#02010100] shadow-lg rounded-lg p-8 text-center hover:bg-[#10505C] transition duration-300 border border-gray-300 w-full max-w-md mx-auto">
      <div className="text-green-400 mb-6">
        <h3 className="text-xl mb-4">{title}</h3>
        <img src={icon} alt={`${title} icon`} className="h-16 mx-auto" />
      </div>
      <h4 className="text-white font-bold text-lg mb-4">{description}</h4>
      <p className="text-[#FFFFFF80] text-m mb-6">Lorem ipsum dolor sit amet</p>
      <button className="text-[#2FFFB9] px-8 py-4  flex items-center justify-center">
        Join Membership<FaArrowRight className="text-[#2FFFB9] m-1" />
      </button>
    </div>
  );
};

export default ServiceCard;
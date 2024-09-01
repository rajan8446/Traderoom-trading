/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";


// const ServiceCard = ({ title, description, icon }) => {
//   return (
//     <div className="bg-[#02010100] shadow-lg rounded-lg p-6 text-center hover:bg-[#10505C] transition duration-300">
//       <div className="text-teal-600 mb-4">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>

//         <img src={icon} alt={`${title} icon`} className="h-12 mx-auto" />
//       </div>
//       <h4 className="text-white">{description}</h4>
//       <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
//       {/* <div className="mt-8 flex justify-center"> */}
//       <button className="text-green-400 px-6 py-3 hover:shadow-lg transition-transform transform hover:scale-105">
//         Join Membership
//       </button>
//       {/* </div> */}
//     </div>
//   );
// };

// export default ServiceCard;

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
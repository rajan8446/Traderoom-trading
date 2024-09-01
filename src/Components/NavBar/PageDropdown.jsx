import { useState } from "react";

const PageDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <span>Page</span>

      {/* Dropdown */}
      <ul
        className={`absolute left-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${
          isDropdownOpen ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsDropdownOpen(true)} // Keep open when hovering over dropdown
        onMouseLeave={() => setIsDropdownOpen(false)} // Close when leaving dropdown
      >
        <li className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            FAQ
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Our Team
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Testomonials
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            404
          </a>
        </li>
      </ul>
    </li>
  );
};

export default PageDropdown;

const Header = () => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-lg font-bold">
          envato<span className="text-green-500">market</span>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
          Buy now
        </button>
      </div>
    </header>
  );
};

export default Header;

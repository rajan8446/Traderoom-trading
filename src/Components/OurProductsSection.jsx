/* eslint-disable react/prop-types */

const ProductCard = ({ image, name, description, price }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:bg-[#10505C] hover:scale-105">
    <img src={image} alt={name} className="object-cover" />

    <div className="p-4 bg-[#0E3B43] border-b border-gray-700">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>

    <div className="bg-[#0E3B43] p-4 flex justify-between items-center">
      <span className="text-lg text-[#2FFFB9] font-bold">${price}</span>
      <button
        className="px-4 py-2 sm:px-3 sm:py-1.5 text-sm sm:text-xs text-base leading-tight rounded-lg text-[#05180C] transition-all duration-300 transform sm:hover:scale-90 hover:scale-95 sm:hover:bg-gradient-to-r hover:from-[#2FFFB9] hover:to-[#C5FF7C] bg-gradient-to-r from-[#2FFFB9] to-[#C5FF7C] 
  xs:px-2 xs:py-1 xs:text-xs xs:leading-tight xs:font-semibold"
      >
        Get Course Now
      </button>
    </div>
  </div>
);



const OurProductSection = () => {
  const products = [
    {
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-01-800x450.jpg",
      name: "Technical Analysis",
      description: "Over 2+ hours of Training Material",
      price: "99.99",
    },
    {
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-02-800x450.jpg",
      name: "Crypto­currency ",
      description: "Over 2+ hours of Training Material",
      price: "89.99",
    },
    {
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-03-800x450.jpg",
      name: "Entries & Exits",
      description: "Over 2+ hours of Training Material",
      price: "79.99",
    },
    {
      image:
        "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Ebook-04-800x450.jpg",
      name: "Essential Candlesticks",
      description: "Over 2+ hours of Training Material",
      price: "69.99",
    },
  ];

  return (
    <section className="py-12 bg-[#0e3b43] text-white rounded-[40px] m-7">
      <div className="flex justify-center items-center bg-[#10505c] rounded-[8px] mb-6 mx-auto px-2 w-fit">
        <h2 className="text-[12px] sm:text-[14px] text-[#2FFFB9] text-center leading-[1.8] tracking-[2px]">
          OUR PRODUCTS
        </h2>
        <img
          className="inline border-none shadow-none h-[0.8em] w-[0.8em] ml-2"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/2b50.svg"
          alt="⭐"
        />
      </div>
      <h2 className="text-5xl font-bold text-center mb-10">
        Our best trading <span className="text-green-400">courses</span>
      </h2>
      <div className="p-6">
        <div className="m-15 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;

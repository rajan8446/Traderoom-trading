
const TradingCommunitySection = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto mb-20 flex flex-col md:flex-row items-center">
        {/* Left Side - Images */}
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          {/* First Image */}
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-02-1536x1024.jpg"
            alt="Trading Community"
            className="rounded-lg shadow-lg  "
          />
          {/* Second Image */}
          <img
            src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-01-1536x1024.jpg"
            alt="Community Members"
            className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 rounded-lg shadow-lg w-1/2 md:w-1/2"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold text[#05180C] mb-4">
            A Trading Community Dedicated To Your Success!
          </h2>
          <p className="text-gray-600 mb-6">
            Join our community of traders and learn from the best. Whether you
            are a beginner or an experienced trader, our community offers
            valuable insights, discussions, and support to help you succeed in
            the trading world.
          </p>
          <a
            href="#join-community"
            className="inline-block bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TradingCommunitySection;

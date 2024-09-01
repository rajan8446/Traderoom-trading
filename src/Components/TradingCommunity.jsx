
import { FaArrowRight } from "react-icons/fa";

const TradingCommunitySection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-24 md:items-center lg:gap-60 container mx-auto py-20">
      <div className="relative flex flex-col w-11/12">
        <img
          src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-02-1536x1024.jpg"
          alt="Trading Community"
          className="rounded-lg shadow-lg first-img w-10/12"
        />
        <img
          src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-01-1536x1024.jpg"
          alt="Community Members"
          className="second-img"
        />
      </div>

      <div className="grow">
        <h2 className="text-4xl font-bold text[#05180C] mb-4">
          A Trading Community Dedicated To Your Success!
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="px-8 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
          <span className="text-black">Explore Membership</span>
          <FaArrowRight className="text-[#0E3B43] ml-6" />
        </button>
      </div>
    </section>
  );
};

export default TradingCommunitySection;
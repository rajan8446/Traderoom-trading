import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-12 bg-[#0e3b43]  text-white rounded-[30px] min-h-screen m-4 my-10 flex flex-col justify-center items-center">
      <div className="w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center bg-[#10505c] rounded-[8px] mb-6 mx-auto p-2">
        <h2 className="text-[12px] sm:text-[14px] text-[#2FFFB9] text-center leading-[1.8] tracking-[2px]">
          OUR SERVICES
        </h2>
        <img
          className="inline border-none shadow-none h-[0.8em] w-[0.8em] ml-2"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/2b50.svg"
          alt="⭐"
        />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold leading-tight">
          Learn to trade with
        </h2>
        <h2 className="text-green-400 font-bold text-6xl">
          technical analysis
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-lg">
        <ServiceCard
          title="Beginners"
          description="The best place to start trading is here."
          icon="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-004.png"
        />
        <ServiceCard
          title="Intermediate"
          description="Take your trading skills to the next level."
          icon="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-003.png"
        />
        <ServiceCard
          title="Advanced"
          description="Gain the skills of a professional trader."
          icon="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-005.png"
        />
      </div>
    </section>
  );
};

export default ServicesSection;


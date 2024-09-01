import ProviderSection from "./ProviderSection";

const providerData = [
  {
    title: "Stock Trading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-012-1.png",
  },
  {
    title: "Forex Trading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-008.png",
  },
  {
    title: "Crypto Trading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-010.png",
  },
  {
    title: "Stock Indices",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-009.png",
  },
  {
    title: "Commodities Trading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-011-1.png",
  },
  {
    title: "Bonus Trading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-013.png",
  },
];

const TradingLearningProviders = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-center ">
          <h2 className="text-4xl font-bold text-center relative inline-block px-4 tracking-tight text-[#0E3B43]">
            Our trading learning provider
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
          {providerData.map((provider, index) => (
            <ProviderSection
              key={index}
              title={provider.title}
              description={provider.description}
              image={provider.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TradingLearningProviders;

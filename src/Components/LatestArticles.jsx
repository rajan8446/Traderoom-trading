
const articles = [
  {
    title: "How to Use TradingView",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06-1024x683.jpg",
  },
  {
    title: "The Newest AI Stock Spike",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-04.jpg",
  },
  {
    title: "What to do in a slow market?",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-08.jpg",
  },
  // Add more articles as needed
];

const LatestArticles = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl [#0E3B43] font-bold mb-8">
          Our Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="p-2">
                <h3 className="text-2xl [#0E3B43] font-semibold mb-7">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;

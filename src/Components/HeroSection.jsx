import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-section-ctn flex py-20 relative overflow-hidden min-h-screen">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        <div className="text-white max-w-2xl ">
          <h1 className="text-5xl font-bold mb-10">
            Your path to trading Mastery{" "}
            <span className="text-green-400">starts here</span>
          </h1>

          <button className="px-8 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
            <span className="text-black">Explore Membership</span>
            <FaArrowRight className="text-[#0E3B43] ml-6" />
          </button>

          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="flex -space-x-5 justify-center md:justify-start mb-4 md:mb-0">
              <img
                className="inline-block h-16 w-16 m-2 rounded-full ring-2 ring-white p-0.4 bg-white"
                src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0002-qs6zolu0rc7lnhwexmp2xxy5z3dzb6asrwhd1xn5lc.jpg"
                alt=""
              />
              <img
                className="inline-block h-16 w-16 m-2 rounded-full ring-2 ring-white p-0.4 bg-white"
                src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0001-qs6zomruy68vz3v1s53pifpmkh9civej414uj7lrf4.jpg"
                alt=""
              />
              <img
                className="inline-block h-16 w-16 m-2 rounded-full ring-2 ring-white p-0.4 bg-white"
                src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0003-qs6zonpp50a6aptomnic2xh35v4pqki9g5sc0hkd8w.jpg"
                alt=""
              />
              <img
                className="inline-block h-16 w-16 m-2 rounded-full ring-2 ring-white p-0.4 bg-white"
                src="https://traderoom.1onestrong.com/wp-content/uploads/elementor/thumbs/Testimonial-0004-qs6zoonjbubgmbsbh5wynf8jr902y9lzsafthriz2o.jpg"
                alt=""
              />
            </div>
            <div className="ml-0 md:ml-20 text-center md:text-left">
              <p>
                15,000 Members Joined: Rated Excellent at 9.1/10 from 200
                Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

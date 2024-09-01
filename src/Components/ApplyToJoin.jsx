import { FaArrowRight } from "react-icons/fa";


const ApplyToJoin = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 m-8 rounded-[10px] "
      style={{
        backgroundImage:
          "url(https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Traderoom-jpg-07.jpg)",
      }}
    >
      <div className="absolute inset-0 opacity-50"></div>{" "}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex justify-start">
          <h2 className="text-6xl font-bold text-white sm:text-4xl">
            Apply to Join My Trading Challenges
          </h2>
        </div>
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
          <div>
            <h2 className="text-white sm:ml-4">Join 584700+ traders inside</h2>
          </div>
        </div>

        <div className="mt-8 flex max-md:justify-center">
          <a
            href="#"
            className="px-8 py-2 rounded-lg text-black bg-[#54f0b7] transition-all duration-300 transform hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center"
          >
            Explore Membership <FaArrowRight className="text-[#0E3B43] ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplyToJoin;

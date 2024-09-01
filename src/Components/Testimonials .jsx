

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Joining the stock trading class at Traderoom completely transformed my trading strategies. I've doubled my portfolio in just six months!",
    name: "Sophia Lee",
    role: "Independent Trader",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-02.jpg",
    rating: 5,
  },
  {
    quote:
      "Traderoom's crypto class is a game-changer. I went from knowing nothing to making consistent profits in a matter of weeks.",
    name: "Mikasa AKerman",
    role: "Independent Trader",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-05.jpg",
    rating: 5,
  },
  {
    quote:
      "Traderoom’s stock trading strategies are straightforward and effective. I’m now making informed trades with confidence",
    name: "John Cena",
    role: "Independent Trader",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-03.jpg",
    rating: 5,
  },
  {
    quote:
      "The forex class at Traderoom provided me with the tools to diversify my investments and secure substantial gains.",
    name: "Maaki",
    role: "Independent Trader",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-07.jpg",
    rating: 5,
  },
  {
    quote:
      "The crypto trading course at Traderoom is a must for anyone looking to make serious gains. My portfolio has never looked better!",
    name: "Bruce Lee",
    role: "Independent Trader",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Testimonials-01.jpg",
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (

    <section className="py-12 bg-[#0e3b43] text-white flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center bg-[#10505c] rounded-[8px] mb-4 mx-auto px-2">
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2FFFB9] text-center leading-[1.8] tracking-[2px]">
            TESTIMONIALS
          </h2>
          <img
            className="inline border-none shadow-none h-[1em] w-[1em] ml-2"
            src="https://s.w.org/images/core/emoji/15.0.3/svg/2b50.svg"
            alt="⭐"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
          What our members <span className="text-green-400">are saying</span>
        </h2>
        <p className="text-center text-[#FFFFFF80] text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
          (674029 REVIEWS OF TRADEROOM ONLINE)
        </p>
        <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-[#0f4a50] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full">
                  <p className="text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6 text-start">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mb-2 sm:mb-4">
                    {Array(testimonial.rating)
                      .fill()
                      .map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-sm sm:text-base md:text-xl"
                        >
                          &#9733;
                        </span>
                      ))}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-green-400 text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;


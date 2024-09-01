
// const testimonials = [
//   {
//     quote:
//       "This platform has transformed my trading skills. The courses are well-structured and easy to follow.",
//     name: "Jane Doe",
//     role: "Professional Trader",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     quote:
//       "I've seen a significant improvement in my investment strategies thanks to the expert guidance provided here.",
//     name: "John Smith",
//     role: "Investor",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     quote:
//       "The learning experience is unmatched. The support from the community is fantastic.",
//     name: "Emily Johnson",
//     role: "Trading Enthusiast",
//     image: "https://via.placeholder.com/150",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           What Our Clients Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                   <p className="text-gray-700">{testimonial.quote}</p>
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                   <p className="text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
// //             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// src/components/TestimonialsCarousel.js

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const testimonials = [
//   {
//     quote: "This platform has transformed my trading skills. The courses are well-structured and easy to follow.",
//     name: "Jane Doe",
//     role: "Professional Trader",
//     image: "https://via.placeholder.com/150"
//   },
//   {
//     quote: "I've seen a significant improvement in my investment strategies thanks to the expert guidance provided here.",
//     name: "John Smith",
//     role: "Investor",
//     image: "https://via.placeholder.com/150"
//   },
//   {
//     quote: "The learning experience is unmatched. The support from the community is fantastic.",
//     name: "Emily Johnson",
//     role: "Trading Enthusiast",
//     image: "https://via.placeholder.com/150"
//   },
// ];

// const TestimonialsCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <section className="py-12 bg-gray-100 ">
//       <div className="container mx-auto px-4 h-screen">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           What our members are saying
//         </h2>
//         <p>(674029 reviews of traderoom Online)</p>
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <p className="text-gray-700">{testimonial.quote}</p>
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                   <p className="text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsCarousel;

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
    <section className="py-12 bg-[#0e3b43] text-white h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <div className="w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center bg-[#10505c] rounded-[8px] mb-2 mx-auto p-2">
          <h2 className="text-[12px] sm:text-[14px] text-[#2FFFB9] text-center leading-[1.8] tracking-[2px]">
            TESTIMONIALS
          </h2>
          <img
            className="inline border-none shadow-none h-[0.8em] w-[0.8em] ml-2"
            src="https://s.w.org/images/core/emoji/15.0.3/svg/2b50.svg"
            alt="⭐"
          />
        </div>
        <h2 className="text-5xl font-bold text-center mb-6">
          What our members <span className="text-green-400">are saying</span>
        </h2>
        <p className="text-center text-[#FFFFFF80] mb-8">
          (674029 REVIEWS OF TRADEROOM ONLINE)
        </p>
        <div className="w-3/4 mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-[#0f4a50] p-8 rounded-lg shadow-lg w-full">
                  <p className="text-lg italic mb-6 text-start">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mb-4">
                    {Array(testimonial.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          &#9733;
                        </span>
                      ))}
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-green-400">{testimonial.role}</p>
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


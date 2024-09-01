/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
// import { FaChartLine, FaEye, FaUsers, FaVideo } from "react-icons/fa";

// const BenefitCard = ({ title, description, imageSrc }) => (
//   <div className="benefit-card-ctn pt-7 rounded-lg flex flex-col justify-between grow">
//     <div>
//       <h3 className="text-xl font-semibold mb-2 text-white text-left px-5 pt-12">
//         {title}
//       </h3>
//       <p className="text-gray-300 mb-4 text-left px-5">{description}</p>
//       <p className="text-white hover:text-green-400 hover:underline text-left px-5">
//         Learn more →
//       </p>
//     </div>
//     <div className="flex justify-end">
//       <img src={imageSrc} className="w-3/4 mt-12 rounded-lg" alt={title} />
//     </div>
//   </div>
// );
// const numericDataArr = [
//   {
//     icon: <FaChartLine className="text-[#2FFFB9] text-3xl" />,
//     number: 12,
//     suffix: "",
//     subtext: "New Lessons Weekly",
//   },
//   {
//     icon: <FaEye className="text-[#2FFFB9] text-3xl" />,
//     number: 50,
//     suffix: "M",
//     subtext: "Views Videos",
//   },
//   {
//     icon: <FaUsers className="text-[#2FFFB9] text-3xl" />,
//     number: 535,
//     suffix: "K",
//     subtext: "Total subscribers",
//   },
//   {
//     icon: <FaVideo className="text-[#2FFFB9] text-3xl" />,
//     number: 2,
//     suffix: "K",
//     subtext: "Lessons video",
//   },
// ];

// const CourseBenefits = () => {
//   const [counters, setCounters] = useState(numericDataArr.map(() => 1));
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const intersectionObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         animateCounters();
//         intersectionObserver.disconnect(); // Stop observing after triggering the animation
//       }
//     });

//     intersectionObserver.observe(sectionRef.current);

//     return () => {
//       if (intersectionObserver) intersectionObserver.disconnect();
//     };
//   }, []);

//   const animateCounters = () => {
//     const maxCount = 3000; // Animation duration in ms
//     const startTime = Date.now();

//     const animate = () => {
//       const currentTime = Date.now();
//       const progress = Math.min((currentTime - startTime) / maxCount, 1); // Calculate progress (from 0 to 1)

//       setCounters(
//         numericDataArr.map((data) => Math.floor(progress * data.number))
//       );

//       if (progress < 1) {
//         requestAnimationFrame(animate); // Continue until progress is 1
//       }
//       requestAnimationFrame(animate);
//     };

//   return (
//     <section
//       className="bg-teal-50 py-20 text-center min-h-screen"
//       ref={sectionRef}
//     >
//       <div className="container mx-auto px-2.5">
//         <div className="py-2.5 mb-2.5">
//           <h2 className="text-3xl font-bold text-teal-900 mb-5">
//             Benefits of joining our course
//           </h2>
//           <div className="flex justify-center">
//             <p className="text-gray-600 mb-12 w-3/5">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 mb-5 py-2.5">
//           {numericDataArr.map((data, idx) => (
//             <div className="flex items-center p-2.5 gap-x-5" key={idx}>
//               <div className="bg-[#0e3b43] p-4 rounded-full">{data.icon}</div>

//               <div>
//                 <div className="relative text-left">
//                   <span className="text-4xl font-bold text-gray-900">
//                     {`${counters[idx]}${data.suffix}`}
//                   </span>
//                   <span className="text-xl font-bold text-gray-900 absolute top-0">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-gray-700 mt-2 text-sm text-left">
//                   {data.subtext}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap lg:flex-nowrap gap-5 w-11/12">
//           <BenefitCard
//             title="Discuss charts in our channels"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
//             imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-015-1.png"
//           />
//           <BenefitCard
//             title="Educational videos Library"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
//             imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-016-1.png"
//           />
//           <BenefitCard
//             title="Guidance when you need it"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
//             imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-017.png"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CourseBenefits;

import { useEffect, useRef, useState } from "react";
import { FaChartLine, FaEye, FaUsers, FaVideo } from "react-icons/fa";

const BenefitCard = ({ title, description, imageSrc }) => (
  <div className="benefit-card-ctn pt-7 rounded-lg flex flex-col justify-between grow">
    <div>
      <h3 className="text-xl font-semibold mb-2 text-white text-left px-5 pt-12">
        {title}
      </h3>
      <p className="text-gray-300 mb-4 text-left px-5">{description}</p>
      <p className="text-white hover:text-green-400 hover:underline text-left px-5">
        Learn more →
      </p>
    </div>
    <div className="flex justify-end">
      <img src={imageSrc} className="w-3/4 mt-12 rounded-lg" alt={title} />
    </div>
  </div>
);

const numericDataArr = [
  {
    icon: <FaChartLine className="text-[#2FFFB9] text-3xl" />,
    number: 12,
    suffix: "",
    subtext: "New Lessons Weekly",
  },
  {
    icon: <FaEye className="text-[#2FFFB9] text-3xl" />,
    number: 50,
    suffix: "M",
    subtext: "Views Videos",
  },
  {
    icon: <FaUsers className="text-[#2FFFB9] text-3xl" />,
    number: 535,
    suffix: "K",
    subtext: "Total subscribers",
  },
  {
    icon: <FaVideo className="text-[#2FFFB9] text-3xl" />,
    number: 2,
    suffix: "K",
    subtext: "Lessons video",
  },
];

const CourseBenefits = () => {
  const [counters, setCounters] = useState(numericDataArr.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateCounters();
        intersectionObserver.disconnect(); // Stop observing after triggering the animation
      }
    });

    intersectionObserver.observe(sectionRef.current);

    return () => {
      if (intersectionObserver) intersectionObserver.disconnect();
    };
  }, []);

  const animateCounters = () => {
    const maxCount = 2000; // Animation duration in ms
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / maxCount, 1); // Calculate progress (from 0 to 1)

      setCounters(
        numericDataArr.map((data) => Math.floor(progress * data.number))
      );

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue until progress is 1
      }
    };

    requestAnimationFrame(animate); // Start the animation
  };

  return (
    <section
      className="bg-teal-50 py-20 text-center min-h-screen flex justify-center items-center"
      ref={sectionRef}
    >
      <div className="container mx-auto px-2.5">
        <div className="py-2.5 mb-2.5">
          <h2 className="text-3xl font-bold text-teal-900 mb-5">
            Benefits of joining our course
          </h2>
          <div className="flex justify-center">
            <p className="text-gray-600 mb-12 w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-6 grid grid-cols-2 lg:grid-cols-4 mb-5 py-2.5">
          {numericDataArr.map((data, idx) => (
            <div className="flex items-center p-2.5 gap-x-5" key={idx}>
              <div className="bg-[#0e3b43] p-4 rounded-full">{data.icon}</div>

              <div>
                <div className="relative text-left">
                  <span className="text-4xl font-bold text-gray-900">
                    {`${counters[idx]}${data.suffix}`}
                  </span>
                  <span className="text-xl font-bold text-gray-900 absolute top-0">
                    +
                  </span>
                </div>
                <p className="text-gray-700 mt-2 text-sm text-left">
                  {data.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-5 w-11/12">
          <BenefitCard
            title="Discuss charts in our channels"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-015-1.png"
          />
          <BenefitCard
            title="Educational videos Library"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-016-1.png"
          />
          <BenefitCard
            title="Guidance when you need it"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            imageSrc="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-017.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;

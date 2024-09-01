import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your trading platform?",
      answer:
        "Our trading platform is a state-of-the-art, user-friendly interface designed to cater to both beginners and advanced traders.",
    },
    {
      question: "How do I sign up?",
      answer:
        "You can sign up by clicking the 'Register' button on the top right of the page and filling out the registration form.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "How do I securely store my cryptocurrencies?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "Will I learn how to pick winning stocks?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },

  ];

  return (
    <div className="w-full mx-auto p-4 flex flex-col items-center min-h-screen">
      <div className="w-full mx-auto p-4 flex flex-col items-center min-h-screen">
        <div className="flex justify-center items-center bg-[#84d9ba] rounded-[8px] mb-4 mx-auto px-2">
          <h2 className="text-xs sm:text-sm md:text-base text-[#5D5D5D] text-center leading-[1.8] tracking-[2px]">
            FAQ QUESTION ❓
          </h2>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#05180C]">
          Frequently Asked Questions
        </h2>
        <p className="mb-6 sm:mb-8 text-[#5D5D5D] text-center text-sm sm:text-base md:text-lg max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="space-y-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-base sm:text-lg font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] bg-[#0E3B43] mt-2 px-8 sm:px-12 md:px-16 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-90 hover:scale-90 hover:bg-[linear-gradient(247deg,#00ff80_0%,#C5FF7C_100%)] flex items-center justify-center">
          <span className="text-white text-sm sm:text-base md:text-lg">
            Explore All FAQ
          </span>
          <FaArrowRight className="text-[#0E3B43] ml-4 sm:ml-6" />
        </button>
      </div>
    </div>
  );
};

export default FAQ;

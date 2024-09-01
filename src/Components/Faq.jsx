import { useState } from "react";

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
    // Add more FAQs here
  ];

  return (
    <div className=" w-full mx-auto bg-[#eafdf8] p-4 flex flex-col items-center h-screen ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <p className="mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="space-y-4 w-[60%] ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

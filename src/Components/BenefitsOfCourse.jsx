const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        {/* Heading with Line */}
        <div className="mb-8 flex justify-center ">
          <h2 className="text-5xl font-bold relative inline-block px-4 tracking-tight text-[#0E3B43]">
            Benefits of joining our course
          </h2>
        </div>

        {/* Description Text */}
        <p className="text-lg text-gray-700 mb-12">
          Discover the advantages of our comprehensive training program. Enhance
          your skills and gain the knowledge you need to succeed in trading.
        </p>

        {/* Feature Boxes */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <img
              src="https://example.com/icon1.png"
              alt="Feature 1"
              className="mx-auto h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">Brief description of the feature.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <img
              src="https://example.com/icon2.png"
              alt="Feature 2"
              className="mx-auto h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">Brief description of the feature.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <img
              src="https://example.com/icon3.png"
              alt="Feature 3"
              className="mx-auto h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">Brief description of the feature.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-1/2 md:w-1/4">
            <img
              src="https://example.com/icon4.png"
              alt="Feature 4"
              className="mx-auto h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Feature 4</h3>
            <p className="text-gray-600">Brief description of the feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

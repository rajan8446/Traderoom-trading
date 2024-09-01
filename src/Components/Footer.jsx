

const Footer = () => {
  return (
    <footer className="bg-[#0E3B43] py-16 text-center text-white rounded-t-[30px] relative ">
      <div className="container mx-auto px-4 ">
        {/* Logo and Subscription Section */}
        <div className="mb-12 ">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Logo-01-1.png"
              className="w-[300px] h-[90px] object-contain"
              alt="Logo"
            />
          </div>
          <p className="text-[#FFFFFF80] mb-4 text-center">
            Subscribe to our newsletter and we will keep you informed about
            upcoming webinars, news, events and updates to our products.
          </p>
          {/* <form className="flex justify-center relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-[10px] px-6 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full ml-2 absolute">
              Subscribe
            </button>
          </form> */}
          <form className="flex flex-col sm:flex-row justify-center items-center mx-auto max-w-md sm:max-w-lg w-full relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-[10px] px-6 py-3 text-gray-700 focus:outline-none w-full pr-28 "
            />
            <button className="absolute right-0 top-0 bg-black hover:bg-[#2FFFB9] text-white py-2 px-6 rounded-[10px] m-1">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-left text-gray-300 mb-8">
          <div>
            <h3 className="text-lg text-white font-bold mb-2">Home</h3>
            <ul className="space-y-1 text-[#FFFFFF80]">
              <li>Home</li>
              <li>Membership</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold mb-2">Services</h3>
            <ul className="space-y-1 text-[#FFFFFF80]">
              <li>Trading Courses</li>
              <li>The Swing Report</li>
              <li>Indicators</li>
              <li>TradrPro™ Alerts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold mb-2">Products</h3>
            <ul className="space-y-1 text-[#FFFFFF80]">
              <li>Articles</li>
              <li>Educational Videos</li>
              <li>E-Books & Guides</li>
              <li>Trading Tools</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold mb-2">Resources</h3>
            <ul className="space-y-1 text-[#FFFFFF80]">
              <li>traderoom Blog</li>
              <li>Success Stories</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold mb-2">Contact</h3>
            <ul className="space-y-1 text-[#FFFFFF80]">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 px-4 pb-4 ">
          <div className="text-sm text-gray-400 space-x-2 cursor-pointer ">
            <span className="hover:text-black cursor-pointer">Disclaimer </span>{" "}
            |
            <span className="hover:text-black cursor-pointer">
              Privacy Service
            </span>{" "}
            |
            <span className="hover:text-black cursor-pointer">Corporation</span>
          </div>
          <div className="text-sm text-gray-400">
            <p className="mt-4 text-center">
              Copyright © 2024 Traderoom | Powered by OneContributor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


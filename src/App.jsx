
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ApplyToJoin from "./Components/ApplyToJoin";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LatestArticles from "./Components/LatestArticles";
import Navbar from "./Components/NavBar/Navbar";
import PartnersSection from "./Components/PartnerSection";
import ProductSection from "./Components/OurProductsSection";
import ServicesSection from "./Components/OurServices/OurServicesSection";
import Testimonials from "./Components/Testimonials ";
import TradingCommunitySection from "./Components/TradingCommunity";
import TradingLearningProviders from "./Components/TradingLearningProvider/TradingLearningProviders";
import CourseBenefits from "./Components/BenefitsOfCourse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="nav-hero-ctn relative">
        <div className="rounded-ctn">
          <div className="img-ctn absolute bottom-0 right-0">
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-04.png"
              alt=""
              className="absolute w-9/12 max-md:w-10/12 bottom-0 md:right-0 hero-img"
            />
            <img
              src="https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Icon-001.png"
              alt=""
            />
          </div>
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <PartnersSection />
      <ServicesSection />
      <TradingCommunitySection />
      <TradingLearningProviders />
      <CourseBenefits />
      <ProductSection />
      <Testimonials />
      <LatestArticles />
      <FAQ />
      <ApplyToJoin />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
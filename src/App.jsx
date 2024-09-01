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
import BenefitsSection from "./Components/BenefitsOfCourse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div
        style={{
          position: "relative", // Ensure positioning context for child elements
          backgroundImage:
            "url(https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Heros-04.png)",
          backgroundColor: "#0e3b43",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          height: "100vh",
          color: "white",
        }}
        className="nav-hero-ctn"
      >
        <Navbar />
        <HeroSection />
      </div>
      <PartnersSection />
      <ServicesSection />
      <TradingCommunitySection />
      <TradingLearningProviders />
      <BenefitsSection />
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

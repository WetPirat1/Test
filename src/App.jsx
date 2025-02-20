import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import LatestDeals from "./components/LatestDealsSection/LatestDeals";
import Header from "./components/Header";
import PricePage from "./components/PriceSection/PricePage";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <LatestDeals />
      <AboutUs />
      <PricePage />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;

import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import SecondSHero from "./components/secondsubhero/SecondSHero";
import SubHero from "./components/subhero/SubHero";

const Home = () => {
  return (
    <div>
      <div className="first-page-ana-kutu">
        <div className="home-page">
          <Navbar />
          <Hero />
          <SubHero />
        </div>
      </div>

      <div className="second-page-ana-kutu">
        <div className="home-page">
          <News />
          <SecondSHero />
        </div>
      </div>

      <div className="footer">
        <div className="home-page">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

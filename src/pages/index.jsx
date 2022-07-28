import ScrollToTop from '../components/atoms/ScrollToTop';
import About from '../components/molecules/About';
import Blog from '../components/molecules/Blog';
import CaseStudy from '../components/molecules/CaseStudy';
import ClientReview from '../components/molecules/ClientReview';
import Contact from '../components/molecules/Contact';
import HeroSection from '../components/molecules/HeroSection';
import Management from '../components/molecules/Management';
import Services from '../components/molecules/Services';
import ValuableClient from '../components/molecules/ValuableClient';

const Home = () => {
  return (
    <div className="pb-0 mb-0">
      <HeroSection />
      <ValuableClient />
      <CaseStudy />
      <ClientReview />
      <Services />
      <Management />
      <About />
      <Blog />
      <Contact />

      <ScrollToTop />
    </div>
  );
};

export default Home;

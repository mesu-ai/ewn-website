import JoinOurTeam from '../components/molecules/JoinOurTeam';
import WhoWeAre from '../components/molecules/WhoWeAre';
import WhyJoinUs from '../components/molecules/WhyJoinUs';
import Footer from '../layout/footer/Footer';

const service = () => {
  return (
    <div>
      <p>Service Page</p>
    </div>
  );
};

service.getLayout = (page) => (
  <>
    <JoinOurTeam />
    <WhyJoinUs />
    <WhoWeAre />
    {page}
    <Footer />
  </>
);

export default service;

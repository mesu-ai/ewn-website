import TypeAnimation from 'react-type-animation';
import MouseIcon from '../../assets/svgs/MouseIcon';

const HeroSection = () => {
  return (
    <section
      style={{
        background:
          'linear-gradient(103.03deg, #EEF3F9 -5.32%, rgba(235, 240, 248, 0.02) 37.74%, rgba(0, 255, 171, 0.04) 110.25%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-0 min-h-screen flex flex-col justify-evenly items-center">
        <div className="h-20 md:h-36">
          <TypeAnimation
            cursor
            repeat={Infinity}
            sequence={['Design, develop and scale digital products', 5000, '']}
            wrapper="h2"
            className="mx-auto font-semibold text-center text-4xl md:text-5xl lg:text-7xl max-w-3xl"
          />
        </div>
        <button
          type="button"
          className="mx-auto rounded shadow-md shadow-info p-4 bg-gradient-to-r from-info to-cyan-400 text-white"
        >
          Start a project
        </button>
        <MouseIcon className="h-16 w-16" />
      </div>
    </section>
  );
};

export default HeroSection;

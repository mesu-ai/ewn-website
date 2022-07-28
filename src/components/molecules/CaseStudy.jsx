import case1 from '../../assets/images/case1.png';
import case2 from '../../assets/images/case2.png';
import case3 from '../../assets/images/case3.png';
import case4 from '../../assets/images/case4.png';
import case5 from '../../assets/images/case5.png';
import case6 from '../../assets/images/case6.png';
import Heading from '../atoms/Heading';
import NavLink from '../atoms/NavLink';
import Overlay from '../atoms/Overlay';

export const cases = [
  { id: 1, banner: case1, info: 'Pet Pat' },
  { id: 2, banner: case2, info: 'Itmaam' },
  { id: 3, banner: case3, info: 'Lifve Safer' },
  { id: 4, banner: case4, info: 'Taamid' },
  { id: 5, banner: case5, info: 'Pet Pat' },
  { id: 6, banner: case6, info: 'Pet Pat' },
  { id: 7, banner: case3, info: 'Pet Pat' },
  { id: 8, banner: case6, info: 'Pet Pat' },
];

const CaseStudy = ({
  title = 'Case study',
  startLeft = 0,
  endLeft = 3,
  startRight = 3,
  endRight = 6,
  bgColor = '',
}) => {
  return (
    <section className={`${bgColor} px-4 sm:px-0 flex flex-col justify-center items-center space-y-5 py-28`}>
      <Heading
        title={title}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy"
      />

      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
        <ul className="space-y-5 ">
          {cases &&
            cases.slice(startLeft, endLeft).map((item) => (
              <Overlay key={item?.id} img={item?.banner}>
                <p className="absolute bottom-8 sm:bottom-5 lg:bottom-10 left-10 text-2xl text-white float-left">
                  {item?.info}
                </p>
                <NavLink
                  path="#"
                  className="bg-white px-2 md:px-7 py-1 md:py-3 rounded absolute  bottom-8 sm:bottom-5 lg:bottom-10 right-8 sm:right-5 lg:right-10 text-sm  text-black font-semibold"
                >
                  Case study
                </NavLink>
              </Overlay>
            ))}
        </ul>

        <ul className="space-y-5">
          {cases &&
            cases.slice(startRight, endRight).map((item) => (
              <Overlay key={item?.id} img={item?.banner}>
                <p className="absolute bottom-8 sm:bottom-5 lg:bottom-10 left-10 text-2xl text-white float-left">
                  {item?.info}
                </p>
                <NavLink
                  path="#"
                  className="bg-white px-2 md:px-7 py-1 md:py-3 rounded absolute  bottom-8 sm:bottom-5 lg:bottom-10 right-8 sm:right-5 lg:right-10 text-sm  text-black font-semibold"
                >
                  Case study
                </NavLink>
              </Overlay>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CaseStudy;

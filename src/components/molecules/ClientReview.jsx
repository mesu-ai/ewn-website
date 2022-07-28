/* eslint-disable react/jsx-props-no-spreading */

// import clientBg from '../../assets/bg/clientbg.png';
import reviewer1 from '../../assets/images/reviewer1.png';
import Heading from '../atoms/Heading';
import ReviewShow from '../atoms/ReviewShow';
import SliderShow from '../atoms/SliderShow';

const reviewers = [
  {
    id: 1,
    name: 'Mohannad Al-Oraini',
    role: 'CEO, Emdadglobal ltd',
    quote:
      'Working with EWN has been a remarkable journey full of professionalism and collaboration. A well-developed and organized team with world-class technical competencies and project management control. ',
    photo: reviewer1,
  },
  {
    id: 2,
    name: 'Mohannad Al-Oraini',
    role: 'CEO, Emdadglobal ltd',
    quote:
      'Working with EWN has been a remarkable journey full of professionalism and collaboration. A well-developed and organized team with world-class technical competencies and project management control. ',
    photo: reviewer1,
  },
  {
    id: 3,
    name: 'Mohannad Al-Oraini',
    role: 'CEO, Emdadglobal ltd',
    quote:
      'Working with EWN has been a remarkable journey full of professionalism and collaboration. A well-developed and organized team with world-class technical competencies and project management control. ',
    photo: reviewer1,
  },
];

const ClientReview = () => {
  const bgstyle = {
    // backgroundImage: "url('../../assets/images/reviewer1.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="bg-lightgreen" style={bgstyle}>
      <div className="container mx-auto px-4 sm:px-0  space-y-5 py-28">
        <Heading
          title="Our clients say"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="mx-5 sm:mx-12 md:mx-14 lg:mx-20 ">
          <SliderShow>
            {reviewers && reviewers.map((review) => <ReviewShow key={review.id} review={review} />)}
          </SliderShow>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;

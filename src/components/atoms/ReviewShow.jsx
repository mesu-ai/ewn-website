import Image from 'next/image';
import QuoteIcon from '../../assets/svgs/QuoteIcon';

const ReviewShow = ({ review }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-24 md:pb-0 md:pt-24 ">
      <div className="relative h-80  sm:h-80 md:h-60 lg:h-72 xl:h-96 w-full rounded bg-white pb-20 ">
        <div className="absolute right-7 sm:right-14 xl:right-24 2xl:right-28 left-7 sm:left-14 xl:left-24 2xl:left-28  -top-16 md:-top-11 lg:-top-16 xl:-top-20 flex flex-col justify-center mb-5">
          <Image className="" height={300} src={review?.photo} alt="reviewer" />

          <p className="font-bold text-xl lg:text-2xl text-center pt-4 md:pt-5 lg:pt-6 xl:pt-10">{review?.name}</p>
          <p className="font-medium text-lg text-center text-riverbed  lg:pt-2">{review?.role}</p>
        </div>
      </div>

      <div className=" ">
        <QuoteIcon />
        <p className="pt-7 min-w-lg text-xl xl:text-3xl">{review?.quote}</p>
      </div>
    </div>
  );
};

export default ReviewShow;

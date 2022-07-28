import Image from 'next/image';
import caseDetails1 from '../assets/images/caseDetails1.png';

import caseDetailsImg1 from '../assets/images/caseinfo1.png';
import caseDetailsImg2 from '../assets/images/caseinfo2.png';
import caseDetailsImg3 from '../assets/images/caseinfo3.png';
import caseDetailsImg4 from '../assets/images/caseinfo4.png';
import CaseDetails from '../components/atoms/CaseDetails';
import CaseStudy, { cases } from '../components/molecules/CaseStudy';
import Contact from '../components/molecules/Contact';

const details1 = [
  { id: 1, info: 'It has survived not only five centuries, but also the leap into ' },
  { id: 2, info: 'Electronic typesetting, remaining essentially unchanged.' },
  { id: 3, info: 'It has survived not only five centuries, but also the leap into ' },
  { id: 4, info: 'Electronic typesetting, remaining essentially unchanged.' },
];

const caseStudy = () => {
  return (
    <div className=" space-y-5 py-28">
      <div className="container mx-auto px-4 sm:px-0 flex flex-col justify-center">
        <Image src={caseDetails1} className=" w-full" />

        <div className="mt-14 max-w-3xl mx-auto space-y-5 pb-10">
          <p className="font-semibold text-3xl md:text-5xl text-secondary text-start">Limo Ride Sharing</p>
          <p className="text-xl font-normal text-riverbed max-w-3xl text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy
          </p>
          <p className="text-xl font-normal text-riverbed max-w-3xl text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <CaseDetails
          caseImg={caseDetailsImg1}
          infoTitle="Home & share ride"
          description="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
          details={details1}
        />
        <CaseDetails
          caseImg={caseDetailsImg2}
          infoTitle="Sidebar and Profile"
          description="When an unknown printer took a galley of type and scrambled it
          to make a type specimen book."
          details={details1}
          className="col-start-1 row-start-1"
          tickColor="#9DF098"
        />
        <CaseDetails
          caseImg={caseDetailsImg3}
          infoTitle="Home & share ride"
          description="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
          details={details1}
        />
        <CaseDetails
          caseImg={caseDetailsImg4}
          infoTitle="Home & share ride"
          description="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
          details={details1}
          className="col-start-1 row-start-1"
          tickColor="#9DF098"
        />

        <p className="text-xl max-w-3xl mx-auto mt-5 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took
        </p>
      </div>

      <CaseStudy
        title="More case study"
        startLeft="6"
        endLeft={6 + (cases.length - 6) / 2}
        startRight={6 + (cases.length - 6) / 2}
        endRight={cases.length}
        bgColor="bg-ghostwhite"
      />
      <Contact />
    </div>
  );
};

export default caseStudy;

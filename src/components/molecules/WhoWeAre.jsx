/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';
import WhoWeAreIMG1 from '../../assets/Images/who-we-are-(1).png';
import WhoWeAreIMG2 from '../../assets/Images/who-we-are-(2).png';
import WhoWeAreIMG3 from '../../assets/Images/who-we-are-(3).png';

const WhoWeAre = () => {
  return (
    <div className=" py-28">
      <div className="container mx-auto px-4">
        <div className="space-y-5 grid justify-items-center">
          <p className="font-semibold text-3xl md:text-5xl text-secondary text-center">Who we are</p>
          <p className="text-lg leading-10 font-normal text-riverbed max-w-[928px]">
            At EWN Bangladesh, we’re building software solutions for businesses. With a special focus on startups and
            small businesses, we excel at ensuring efficient and optimum user experiences. <br /> Empowered by an
            evolving team, EWN leadership welcomes partnering opportunities for ideas of tomorrow.
          </p>
        </div>
        <div className="pt-14 grid justify-items-center">
          <div className="grid  md:grid-cols-5 gap-8">
            <div className="md:row-span-2 md:col-span-3 flex justify-end">
              <Image src={WhoWeAreIMG1} alt="" />
            </div>
            <div className="md:row-span-1 md:col-span-2 grid justify-items-start">
              <Image src={WhoWeAreIMG2} alt="" />
            </div>
            <div className="md:row-span-1 md:col-span-2 grid justify-items-start">
              <Image src={WhoWeAreIMG3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

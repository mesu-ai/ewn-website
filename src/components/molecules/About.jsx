/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';
import AboutCompanyIMGf1 from '../../assets/Images/About-our-company-(1).png';

const About = () => {
  return (
    <section className="bg-ghostwhite py-28">
      <div className="container mx-auto grid md:grid-cols-2 gap-20 px-4">
        <div className="  grid  content-center">
          <div className="space-y-5 max-w-xl text-center md:text-start">
            <h1 className="font-semibold text-3xl md:text-5xl text-secondary">About our company</h1>
            <p className="text-lg font-normal">
              At EWN Bangladesh, we’re building software solutions for businesses. With a special focus on startups and
              small businesses, we excel at ensuring efficient and optimum user experiences. Empowered by an evolving
              team, EWN leadership welcomes partnering opportunities for ideas of tomorrow.
            </p>
          </div>
        </div>
        <div className="grid justify-items-center md:justify-items-end">
          <div className="">
            <Image src={AboutCompanyIMGf1} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

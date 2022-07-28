/* eslint-disable no-unused-vars */
import React from 'react';
import Check from '../../assets/svgs/Check';

const WhyJoinUs = () => {
  const WhyJoinUsPoints = [
    {
      title: 'Fast growing company',
      description: 'We are at an inflection point to achieve accelerated',
    },
    {
      title: 'Take charge',
      description: 'As much as you are  willing to take and show exellence',
    },
    {
      title: 'Great colleagues',
      description: 'Closely tied and supportive team',
    },
    {
      title: 'Latest technology stack',
      description: 'Working experience of cutting egge technologies',
    },
    {
      title: 'Don’t stop learning',
      description: 'An atmosphere where learning is always on the to do list',
    },
    {
      title: 'Cross domain exposure',
      description: 'Highly passinate and cohesive team of technology and business people',
    },
  ];

  return (
    <div className="bg-ghostwhite py-28">
      <div className="container mx-auto px-4">
        <div className="grid justify-items-center">
          <p className="font-semibold text-3xl md:text-5xl text-secondary text-center">Why join us</p>
        </div>
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-3">
          {WhyJoinUsPoints &&
            WhyJoinUsPoints.map((Points) => (
              <div key={Points.title}>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-2xl mr-2">{Points.title}</p>
                  </div>
                  <div className="flex items-center">
                    <Check />
                  </div>
                </div>
                <p className="text-lg text-riverbed mt-5">{Points.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;

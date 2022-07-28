/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';
import TeamIMG from '../../assets/Images/Join-our-team.png';
import Header from '../../layout/header/Header';

const JoinOurTeam = () => {
  return (
    <div style={{ background: 'linear-gradient(96.29deg, #1098FF 13.13%, #09C3DC 81.17%, #00FFAB 175.09%)' }}>
      <Header isTransparent />
      <div className="container mx-auto grid md:grid-cols-2 px-4">
        <div className=" grid content-center">
          <div>
            <div className="text-white">
              <p className="font-semibold text-3xl md:text-5xl ">Join our team</p>
              <p className="text-lg mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy
              </p>
            </div>
            <button
              type="button"
              path="#"
              className="ring-2 ring-white bg-white rounded-sm mt-16 px-8 py-5 font-semibold"
            >
              See open roles
            </button>
          </div>
        </div>
        <div className="grid justify-items-center md:justify-items-end  content-end">
          <div className="pt-2">
            <Image className="" src={TeamIMG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;

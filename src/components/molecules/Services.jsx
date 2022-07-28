import Image from 'next/image';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service4 from '../../assets/images/service4.png';

import ArrowRightIcon from '../../assets/svgs/ArrowRightIcon';
import Heading from '../atoms/Heading';
import NavLink from '../atoms/NavLink';

const services = [
  {
    name: 'Project Scope',
    description:
      'Business analysis, Conversions audits and UX/UI design work that boost product aduption and user base grouth',
    logo: service1,
  },
  {
    name: 'UI/UX Design',
    description:
      'Business analysis, Conversions audits and UX/UI design work that boost product aduption and user base grouth',
    logo: service2,
  },
  {
    name: 'MVP Building',
    description:
      'Business analysis, Conversions audits and UX/UI design work that boost product aduption and user base grouth',
    logo: service3,
  },
  {
    name: 'Support & Maintenance',
    description:
      'Business analysis, Conversions audits and UX/UI design work that boost product aduption and user base grouth',
    logo: service4,
  },
];

const Services = () => {
  return (
    <div className="bg-ghostwhite py-28">
      <div className="container mx-auto px-4 sm:px-0 flex flex-col justify-center items-center space-y-5">
        <Heading
          title="Our services"
          description="We help clients to design and develop future-proof, significant, and secure digital products that are centered
          around user's needs and fulfill client's business goals."
        />

        <div className="grid sm:grid-cols-2 pt-20 gap-x-7 gap-y-16">
          {services &&
            services.map((service) => (
              <div key={service.name} className="relative bg-white rounded pl-10 pr-8 py-8">
                <div className="absolute left-10 -top-10">
                  <Image src={service?.logo} alt="service" />
                </div>
                <p className="font-semibold text-2xl pt-14">{service?.name}</p>
                <p className="text-lg text-riverbed mt-5">{service?.description}</p>

                <NavLink path="#" className="flex items-center float-right ring-2 ring-black rounded-sm mt-16">
                  See more
                  <ArrowRightIcon className="ml-2" />
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

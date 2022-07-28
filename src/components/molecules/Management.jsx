import Image from 'next/image';
import Link from 'next/link';
import employee1 from '../../assets/images/employee1.png';
import employee2 from '../../assets/images/employee2.png';
import employee3 from '../../assets/images/employee3.png';
import InstagramIcon from '../../assets/svgs/Instagram';
import LinkdinIcon from '../../assets/svgs/LinkdinIcon';
import TwitterIcon from '../../assets/svgs/TwitterIcon';
import Heading from '../atoms/Heading';

const managements = [
  {
    id: 1,
    name: 'Micale smith',
    role: 'Developer',
    photo: employee1,
    twitter: '#',
    instagram: '#link',
    linkdin: '#link',
  },

  {
    id: 2,
    name: 'Jassia sam',
    role: 'SQA Engineer',
    photo: employee2,
    twitter: '#link',
    instagram: '#link',
    linkdin: '#link',
  },
  {
    id: 3,
    name: 'Micale smith',
    role: 'Team Leader',
    photo: employee3,
    twitter: '#link',
    instagram: '#link',
    linkdin: '#link',
  },
];

const Management = () => {
  return (
    <section className="container mx-auto px-4 sm:px-0 flex flex-col justify-center items-center space-y-5 pt-28 pb-36">
      <Heading
        title="Meet the Management"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy"
      />

      <div className="grid sm:grid-cols-3 pt-20 gap-x-6 gap-y-24  mx-auto">
        {managements &&
          managements.map((management) => (
            <div key={management.id} className="relative">
              <div className="w-fit">
                <Image className="" src={management?.photo} />
              </div>
              <div
                className="absolute  rounded py-5 left-5 right-5   bg-white  -bottom-16 "
                style={{ boxShadow: '0px 13px 26px rgba(69, 88, 116, 0.07)' }}
              >
                <p className="font-semibold text-xl text-center">{management.name}</p>
                <p className="font-medium text-center text-steel">{management.role}</p>

                <div className="flex justify-center items-center space-x-5 mt-5">
                  <Link href={management.twitter}>
                    <a>
                      <TwitterIcon className="opacity-20 hover:opacity-70" />
                    </a>
                  </Link>
                  <Link href={management.instagram}>
                    <a>
                      <InstagramIcon className="opacity-20 hover:opacity-70" />
                    </a>
                  </Link>
                  <Link href={management.linkdin}>
                    <a>
                      <LinkdinIcon className="opacity-20 hover:opacity-70" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Management;

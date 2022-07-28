import Image from 'next/image';
/* eslint-disable no-unused-expressions */
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';
import client6 from '../../assets/images/client6.png';
import client7 from '../../assets/images/client7.png';
import client8 from '../../assets/images/client8.png';
import client9 from '../../assets/images/client9.png';
import Heading from '../atoms/Heading';

const clients = [
  { id: 1, logo: client1 },
  { id: 2, logo: client2 },
  { id: 3, logo: client3 },
  { id: 4, logo: client4 },
  { id: 5, logo: client5 },
  { id: 6, logo: client6 },
  { id: 7, logo: client7 },
  { id: 8, logo: client8 },
  { id: 9, logo: client9 },
];

const ValuableClient = () => {
  return (
    <section className="bg-ghostwhite py-28">
      <div className="container mx-auto px-4 sm:px-0 flex flex-col justify-center items-center space-y-5">
        <Heading
          title="Our valuable clients"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 ">
          {clients.map((client) => (
            <div key={client.id} className="p-2 bg-white mx-auto rounded flex justify-center items-center">
              <Image className="rounded" src={client.logo} alt="client brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuableClient;

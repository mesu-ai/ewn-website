import ArrowOutward from '../../assets/svgs/ArrowOutward';
import FooterLogo from '../../assets/svgs/FooterLogo';
import footerRoutes from '../../routes/footerRoutes';
import SocialMediaRoutes from '../../routes/SocialMediaRoutes';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto grid md:grid-cols-6 gap-3 gap-x-10 md:gap-x-20 py-20 px-4">
        <div className="col-span-3 lg:col-span-1 lg:row-span-3 lg:col-start-1 lg:row-start-1 grid lg:justify-items-center justify-items-end content-end lg:content-start">
          <FooterLogo className="w-fit" />
        </div>

        <div className="col-span-3 lg:col-span-2 lg:col-start-2 lg:row-start-1 ">
          <p className="text-xl">
            18A, Confidence Tower – 2, <br /> Kha-9, Shahjadpur, Gulshan,
            <br /> Dhaka-1212, Bangladesh
          </p>
          <button
            type="button"
            className="rounded px-7 py-2 border-2 border-white hover:underline flex items-center justify-center mt-8 w-fit h-fit"
          >
            <div className="mx-2">View Map</div>
            <div className="pt-3">
              <ArrowOutward />
            </div>
          </button>
        </div>

        <div className="col-span-3 row-start-4 lg:row-start-1 lg:col-span-1 text-end lg:text-start">
          <ul className="leading-8">
            {footerRoutes &&
              footerRoutes.map((item) => (
                <li key={item.name}>
                  <a path={item.path}>{item.name}</a>
                </li>
              ))}
          </ul>
        </div>

        <div className="col-span-3 row-start-4 lg:row-start-1 lg:col-span-1">
          <ul className="leading-8">
            {SocialMediaRoutes &&
              SocialMediaRoutes.map((item) => (
                <li key={item.name}>
                  <a path={item.path}>{item.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-3 row-start-2 col-start-4 lg:col-span-4">
          <p>+8801986689431</p>
        </div>
        <div className="col-span-3 row-start-3 col-start-4 lg:col-span-2">
          <p>info@ewn-bd.com</p>
        </div>
        <div className="col-span-6 lg:col-span-3 text-center row-start-5 lg:text-start lg:row-start-3">
          <p>&copy; 2022 EWN Bangladesh LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

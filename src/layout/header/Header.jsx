import { useState } from 'react';
import CloseIcon from '../../assets/svgs/CloseIcon';
import Logo from '../../assets/svgs/Logo';
import LogoWhite from '../../assets/svgs/LogoWhite';
import MenuIcon from '../../assets/svgs/MenuIcon';
import NavLink from '../../components/atoms/NavLink';
import headerRoutes from '../../routes/headerRoutes';

// const Header = ({ isTransparent }) => {
const Header = ({ isTransparent }) => {
  const [open, setOpen] = useState(false);

  return (
    // <nav className={`container mx-auto px-6 xl:px-10 sm:px-0 py-6 ${isTransparent ? 'bg-transparent' : 'bg-white'}`}></nav>
    <nav className={`container mx-auto px-6 xl:px-10 sm:px-0 py-6  ${isTransparent ? 'bg-transparent' : 'bg-white'}`}>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            {isTransparent ? (
              <LogoWhite isTransparent className="w-full h-full" />
            ) : (
              <Logo isTransparent className="w-full h-full" />
            )}
          </div>

          <div className=" hidden md:flex justify-center">
            <ul className="flex flex-row justify-center items-center space-x-4">
              {headerRoutes &&
                headerRoutes.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      path={item.path}
                      className={`${
                        isTransparent
                          ? 'text-white hover:bg-white hover:text-black'
                          : ' hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {item.name}{' '}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          <div className="hidden md:block ">
            <NavLink
              path="/contact-us"
              className={`ring-offset-2 ring-2 rounded-sm ${
                isTransparent
                  ? 'ring-white  hover:bg-white hover:text-black text-white'
                  : ' ring-slate-600  hover:bg-gray-700 hover:text-white'
              }`}
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>

      {open && (
        <ul className="md:hidden block absolute pt-4 h-screen w-full right-0 bg-white z-50">
          <div className="px-2 pt-2 pb-3 space-y-3 text-slate-900">
            {headerRoutes &&
              headerRoutes.map((item) => (
                <li key={item.name}>
                  <NavLink name={item.name} className="block text-center mx-5 hover:bg-gray-700 hover:text-white">
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </div>

          <div className="flex justify-center mt-6">
            <NavLink
              path="/contact-us"
              className="ring-offset-2 ring-2 ring-slate-600 rounded-sm hover:bg-gray-700 hover:text-white"
            >
              Contact us
            </NavLink>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Header;

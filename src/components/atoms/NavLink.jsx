import Link from 'next/link';

const NavLink = ({ path = '#', className = '', children = {} }) => {
  return (
    <Link href={path}>
      <a className={` text-secondary text-lg md:text-base rounded-md py-2 px-3 font-semibold  ${className}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

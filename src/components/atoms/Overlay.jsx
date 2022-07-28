/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import Image from 'next/image';
import propTypes from 'prop-types';

const Overlay = ({ img = {}, className = '', children }) => {
  return (
    <div className={`relative group ${className}`}>
      <Image className="" src={img} />

      <div className="list-none hidden group-hover:block  absolute top-0 -mt-1 hover:bg-black hover:bg-opacity-60 w-full h-full ">
        {children}
      </div>
    </div>
  );
};

Overlay.propTypes = {
  img: propTypes.object,
  className: propTypes.string,
};

export default Overlay;

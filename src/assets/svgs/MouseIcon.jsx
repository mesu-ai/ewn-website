/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';

const MouseIcon = ({ height = 62, width = 62, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 56.8334C41.6692 56.8334 50.375 48.1275 50.375 37.4584V24.5417C50.375 13.8725 41.6692 5.16669 31 5.16669C20.3308 5.16669 11.625 13.8725 11.625 24.5417V37.4584C11.625 48.1275 20.3308 56.8334 31 56.8334Z"
        stroke="#02060C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 28.4167C28.8558 28.4167 27.125 26.6858 27.125 24.5417V19.375C27.125 17.2308 28.8558 15.5 31 15.5C33.1183 15.5 34.875 17.2308 34.875 19.375V24.5417C34.875 26.6858 33.1183 28.4167 31 28.4167Z"
        stroke="#02060C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 15.5V5.16669" stroke="#02060C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

MouseIcon.propTypes = {
  height: propTypes.number,
  width: propTypes.number,
  className: propTypes.string,
};

export default MouseIcon;

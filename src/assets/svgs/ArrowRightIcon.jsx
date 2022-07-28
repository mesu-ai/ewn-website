/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const ArrowRightIcon = ({ height = 13, width = 14, className = '#02060C' }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${height} ${width}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.46154 12L13 6.5M13 6.5L7.46154 1M13 6.5L0.999999 6.5"
        stroke={className}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default ArrowRightIcon;

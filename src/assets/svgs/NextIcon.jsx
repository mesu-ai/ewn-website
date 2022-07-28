/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const NextIcon = ({ height = 20, width = 12, className = '' }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.625 1.25L10.375 10L1.625 18.75"
        stroke="#02060C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NextIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default NextIcon;

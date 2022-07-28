/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const PrevIcon = ({ height = 20, width = 12, className = '' }) => {
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
        d="M10.375 18.75L1.625 10L10.375 1.25"
        stroke="#02060C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PrevIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default PrevIcon;

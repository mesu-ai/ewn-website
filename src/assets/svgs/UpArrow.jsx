/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const UpArrow = ({ height = 52, width = 52, className = '' }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${height} ${width}`}
      className={className}
      fill="none"
      // stroke="currentColor"
      // strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="26" r="26" transform="rotate(90 26 26)" fill="#1098FF" />
      <path d="M26 19L26 35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M32 25L26.4096 18.1978C26.3584 18.1356 26.2955 18.0858 26.225 18.0517C26.1544 18.0176 26.0779 18 26.0005 18C25.9232 18 25.8467 18.0176 25.7761 18.0517C25.7056 18.0858 25.6426 18.1356 25.5915 18.1978L20 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
UpArrow.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default UpArrow;

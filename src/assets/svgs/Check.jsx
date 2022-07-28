/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Check = ({ height = 26, width = 26, className = '' }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${height} ${width}`}
      className={className}
      fill="none"
      //   stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="13" fill="#E3F3FF" />
      <path
        d="M8.125 12.9998L11.3759 16.0466L17.875 9.95288"
        stroke="#1098FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Check.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default Check;

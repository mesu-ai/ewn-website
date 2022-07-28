/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const TickIcon = ({ height = 24, width = 24, className = '', color = '' }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill={color}
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill={color} />
      <path
        d="M7.75 12L10.58 14.83L16.25 9.17004"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TickIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default TickIcon;

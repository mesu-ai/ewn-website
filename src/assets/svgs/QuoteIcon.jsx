/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const QuoteIcon = ({ height = 64, width = 64, className = '' }) => {
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
      <g clipPath="url(#clip0_66_1577)">
        <path
          d="M0 32.0001V59.4288H27.4286V32.0001H9.14292C9.14292 21.9176 17.3461 13.7145 27.4286 13.7145V4.57153C12.3036 4.57153 0 16.8751 0 32.0001Z"
          fill="#02060C"
        />
        <path
          d="M64.0006 13.7145V4.57153C48.8756 4.57153 36.572 16.8751 36.572 32.0001V59.4288H64.0006V32.0001H45.7149C45.7149 21.9176 53.9181 13.7145 64.0006 13.7145Z"
          fill="#02060C"
        />
      </g>
      <defs>
        <clipPath id="clip0_66_1577">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

QuoteIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default QuoteIcon;

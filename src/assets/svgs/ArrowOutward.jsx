/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const ArrowOutward = ({ height = 24, width = 24, className = '' }) => {
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
      <path
        d="M12.4614 3.9683L10.0925 11.6013C9.52557 13.4134 6.98459 13.4438 6.38731 11.6419L5.67867 9.54629C5.48633 8.96926 5.03077 8.50359 4.45374 8.32137L2.34807 7.61272C0.556222 7.01544 0.586592 4.45422 2.39868 3.90756L10.0317 1.52855C11.53 1.07299 12.9372 2.48015 12.4614 3.9683Z"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
ArrowOutward.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default ArrowOutward;

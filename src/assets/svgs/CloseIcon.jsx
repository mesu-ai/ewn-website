/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const CloseIcon = ({ height = 24, width = 24, className = '' }) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

CloseIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default CloseIcon;

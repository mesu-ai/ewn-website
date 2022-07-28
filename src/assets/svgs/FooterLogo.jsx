/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const FooterLogo = ({ height = 100, width = 100, className = '' }) => {
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
      <path d="M38.0626 0L76.9501 0L81.6282 5.24756L74.6214 10.4847L34.199 10.4847L38.0626 0Z" fill="#1098FF" />
      <path
        d="M65.2649 57.1404L23.5267 57.1404L18.8485 51.9032L25.8553 46.666L67.5935 46.666L65.2649 57.1404Z"
        fill="#1098FF"
      />
      <path d="M0 34.0463L63.7924 34.0463L66.1211 23.5615L3.85324 23.5615L1.93181 28.7987L0 34.0463Z" fill="#00FFAB" />
    </svg>
  );
};
FooterLogo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

export default FooterLogo;

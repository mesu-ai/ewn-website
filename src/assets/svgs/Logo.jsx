/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';

const Logo = ({ height = 29, width = 123, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7832 0.532097L37.9735 0.532097L40.2821 3.12168L36.8243 5.70611L16.8766 5.70611L18.7832 0.532097Z"
        fill="#1098FF"
      />
      <path
        d="M32.2068 28.7299L11.6097 28.7299L9.30115 26.1455L12.7589 23.561L33.3559 23.561L32.2068 28.7299Z"
        fill="#1098FF"
      />
      <path
        d="M-0.00012207 17.3335L31.4803 17.3335L32.6294 12.1595L1.90138 12.1595L0.953194 14.744L-0.00012207 17.3335Z"
        fill="#00FFAB"
      />
      <path
        d="M56.3339 7.81793L55.4681 12.5244H64.8211L64.0996 16.4293H54.721L53.8037 21.4492L64.7902 21.4492L64.012 25.4775L48.4238 25.4775L52.4484 3.78966L67.6656 3.78966L66.8926 7.81793L56.3339 7.81793Z"
        fill="#07111F"
      />
      <path
        d="M101.928 3.78966L91.2872 25.4775H86.3093L84.5521 10.8853L77.2758 25.4775H72.2722L69.7111 3.78966L74.3128 3.78966L76.0958 19.0343L83.6606 3.78966L87.9789 3.78966L89.7 19.1577L97.2958 3.78966L101.928 3.78966Z"
        fill="#07111F"
      />
      <path
        d="M122.959 3.78966L118.929 25.4775H115.105L107.597 11.9078L105.067 25.4775H100.46L104.49 3.78966L108.344 3.78966L115.852 17.3902L118.357 3.78966L122.959 3.78966Z"
        fill="#07111F"
      />
    </svg>
  );
};

Logo.propTypes = {
  height: propTypes.number,
  width: propTypes.number,
  className: propTypes.string,
};

export default Logo;

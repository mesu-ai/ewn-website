/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';

const LogoWhite = ({ height = 29, width = 123, className = '' }) => {
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
        d="M18.7836 0.532097L37.9739 0.532097L40.2824 3.12168L36.8247 5.70611L16.877 5.70611L18.7836 0.532097Z"
        fill="white"
      />
      <path
        d="M32.2064 28.7299L11.6094 28.7299L9.30078 26.1455L12.7585 23.561L33.3556 23.561L32.2064 28.7299Z"
        fill="white"
      />
      <path d="M0 17.3335L31.4804 17.3335L32.6296 12.1595L1.90151 12.1595L0.953316 14.744L0 17.3335Z" fill="white" />
      <path
        d="M56.3339 7.81793L55.4681 12.5244H64.8211L64.0996 16.4293H54.721L53.8037 21.4492L64.7902 21.4492L64.012 25.4775L48.4238 25.4775L52.4484 3.78966L67.6656 3.78966L66.8926 7.81793L56.3339 7.81793Z"
        fill="white"
      />
      <path
        d="M101.928 3.78966L91.2871 25.4775H86.3092L84.5519 10.8853L77.2757 25.4775H72.2721L69.7109 3.78966L74.3127 3.78966L76.0957 19.0343L83.6605 3.78966L87.9788 3.78966L89.6999 19.1577L97.2956 3.78966L101.928 3.78966Z"
        fill="white"
      />
      <path
        d="M122.959 3.78966L118.929 25.4775H115.105L107.597 11.9078L105.067 25.4775H100.46L104.49 3.78966L108.344 3.78966L115.852 17.3902L118.357 3.78966L122.959 3.78966Z"
        fill="white"
      />
    </svg>
  );
};

LogoWhite.propTypes = {
  height: propTypes.number,
  width: propTypes.number,
  className: propTypes.string,
};

export default LogoWhite;

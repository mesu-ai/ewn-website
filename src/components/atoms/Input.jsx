/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Input = ({ placeholder = '', name = '', className = '', handleBlur }) => {
  return (
    <input
      onBlur={handleBlur}
      className={`bg-white outline-none px-4 py-2.5 rounded text-xl sm:text-2xl font-medium focus:text-black focus:font-semibold ${className}`}
      placeholder={placeholder}
      name={name}
    />
  );
};
Input.propTypes = {
  handleBlur: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-typos */
import propTypes from 'prop-types';

const Button = ({ children = {}, className = '', ...rest }) => {
  return (
    
    <button type="button" className={`flex items-center text-sm font-medium rounded px-4 py-3 ${className}`} {...rest} >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: propTypes.string,
};

export default Button;

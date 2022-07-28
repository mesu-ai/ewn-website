/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <p className="font-semibold text-3xl md:text-5xl text-secondary text-center">{title}</p>
      <p className="text-xl font-normal text-riverbed max-w-2xl text-center">{description}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Heading;

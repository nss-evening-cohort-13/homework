import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
});

export default goatShape;

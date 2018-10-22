import React from 'react';
import PropTypes from 'prop-types';

function ItemImage(props) {
  const { alt } = props;
  return (<img {...props} alt={alt} />);
}

ItemImage.defaultProps = {
  alt: 'Image',
};

ItemImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ItemImage;

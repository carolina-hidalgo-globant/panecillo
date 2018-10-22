import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ItemImage(props) {
  const { alt } = props;
  return (<Image {...props} alt={alt} responsive />);
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

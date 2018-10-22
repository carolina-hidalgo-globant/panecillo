import React from 'react';
import PropTypes from 'prop-types';
import ItemImage from '../../../atoms/_item_image';

function ImageLinksMole({ title, image }) {
  return (
    <li>
      <ItemImage src={image} alt={title} title={title} />
      <span>{title}</span>
    </li>
  );
}

ImageLinksMole.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageLinksMole;

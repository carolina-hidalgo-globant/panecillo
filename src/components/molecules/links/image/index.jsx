import React from 'react';
import PropTypes from 'prop-types';
import ItemImage from '../../../atoms/item_image';

function ImageLinksMole({ title, image }) {
  return (
    <li>
      <span>{title}</span>
      <ItemImage src={image} alt={title} title={title} />
    </li>
  );
}

ImageLinksMole.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageLinksMole;

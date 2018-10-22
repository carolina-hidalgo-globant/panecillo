import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import ItemImage from '../../../atoms/_item_image';

function ImageLinksMole({ title, image }) {
  return (
    <NavItem>
      <span>{title}</span>
      <ItemImage src={image} alt={title} title={title} />
    </NavItem>
  );
}

ImageLinksMole.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageLinksMole;

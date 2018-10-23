import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../../scss/atoms/item_image.scss';

function ItemImage(props) {
  const { alt } = props;
  return (<Image {...props} alt={alt} className={styles.item_image} responsive />);
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

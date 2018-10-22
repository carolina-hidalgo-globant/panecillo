import React from 'react';
import PropTypes from 'prop-types';
import { ItemImage } from '../atoms/item_image';
import { ItemTitle } from '../atoms/item_title';

function ItemMenu() {
  return (
    <li>
      <ItemImage />
      <ItemTitle />
    </li>
  );
}

ItemMenu.propTypes = {
  menuImage: PropTypes.string.isRequired,
};

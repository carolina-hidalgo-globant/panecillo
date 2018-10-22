import React from 'react';
import PropTypes from 'prop-types';
import ItemImage from '../links/image';

function MenuMole({ items }) {
  return (
    <ul>
      {items.map(item => (<ItemImage key={item.menu_id} title={item.menu_name} image={item.image_url} />))}
    </ul>
  );
}

MenuMole.propTypes = {
  items: PropTypes.any.isRequired,
};

export default MenuMole;

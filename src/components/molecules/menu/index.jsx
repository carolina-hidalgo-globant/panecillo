import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import ItemImage from '../links/image';
import styles from '../../../scss/molecules/menu.scss';

function MenuMole({ items }) {
  return (
    <Nav className={styles.menue} bsStyle="pills">
      {items.map(item => (<ItemImage key={item.menu_id} title={item.menu_name} image={item.image_url} />))}
    </Nav>
  );
}

MenuMole.propTypes = {
  items: PropTypes.any.isRequired,
};

export default MenuMole;

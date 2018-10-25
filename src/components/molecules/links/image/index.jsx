import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import ItemImage from '../../../atoms/item_image/item_image';
import styles from '../../../../scss/molecules/nav_item.scss';

function NavItemMole({ title, image }) {
  return (
    <NavItem className={styles.nav_item}>
      <span>{title}</span>
      <ItemImage src={image} alt={title} title={title} />
    </NavItem>
  );
}

NavItemMole.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NavItemMole;

import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from 'react-bootstrap';
import styles from '../../../scss/molecules/select.scss';
import ItemOption from '../../item_option/item_option';

function SelectMole({ title, items }) {
  return (
    <DropdownButton
      id="otherMenu"
      className={`${styles['other-menu']} ${styles['other-menu--smalltext']}`}
      title={title}
      bsSize="large"
    >
      {items.map(item => (<ItemOption key={item.menu_id} value={item.menu_id} label={item.menu_name} />))}
    </DropdownButton>
  );
}

SelectMole.propTypes = {
  items: PropTypes.any.isRequired,
  title: PropTypes.object.isRequired,
};

export default SelectMole;

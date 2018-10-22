import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from 'react-bootstrap';
import ItemOption from '../../atoms/_item_option';

function SelectMole({ items }) {
  return (
    <DropdownButton>
      {items.map(item => (<ItemOption key={item.menu_id} value={item.menu_id} label={item.menu_name} />))}
    </DropdownButton>
  );
}

SelectMole.propTypes = {
  items: PropTypes.any.isRequired,
};

export default SelectMole;

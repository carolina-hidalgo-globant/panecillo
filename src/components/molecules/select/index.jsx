import React from 'react';
import PropTypes from 'prop-types';
import ItemOption from '../../atoms/_item_option';

function SelectMole({ items }) {
  return (
    <select>
      {items.map(item => (<ItemOption value={item.menu_id} label={item.menu_name} />))}
    </select>
  );
}

SelectMole.propTypes = {
  items: PropTypes.any.isRequired,
};

export default SelectMole;

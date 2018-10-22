import React from 'react';
import PropTypes from 'prop-types';

function ItemOption(props) {
  const { value, label } = props;
  return (<option {...props} value={value}>{label}</option>);
}

ItemOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ItemOption;

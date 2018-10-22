import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-bootstrap';

function ItemOption(props) {
  const { value, label } = props;
  return (<MenuItem {...props} value={value}>{label}</MenuItem>);
}

ItemOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ItemOption;

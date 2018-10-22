import React from 'react';
import PropTypes from 'prop-types';

function ItemTitle(props) {
  const menuName = props;
  return (
    <span>
      {menuName}
    </span>
  );
}

ItemTitle.propTypes = {
  menuName: PropTypes.string.isRequired,
};

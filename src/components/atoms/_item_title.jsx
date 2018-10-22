import React from 'react';
import PropTypes from 'prop-types';

function ItemTitle(props) {
  const menuName = props;
  return (
    <h3>
      {menuName}
    </h3>
  );
}

ItemTitle.propTypes = {
  menuName: PropTypes.string.isRequired,
};

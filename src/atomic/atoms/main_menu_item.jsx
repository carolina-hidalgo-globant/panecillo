import React from 'react';
import PropTypes from 'prop-types';

function MainMenuItem({ children }) {
  return (
    <li>{children}</li>
  );
}


MainMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainMenuItem;

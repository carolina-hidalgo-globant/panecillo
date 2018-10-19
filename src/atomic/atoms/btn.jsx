import React from 'react';
import PropTypes from 'prop-types';

function BtnSample({ children }) {
  return (
    <button type="button">{children}</button>
  );
}


BtnSample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BtnSample;

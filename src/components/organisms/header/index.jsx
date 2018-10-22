import React from 'react';
import PropTypes from 'prop-types';
import HeadlineAtm from '../../atoms/item_headline';
import MenuMole from '../../molecules/menu';

function HeaderOrg({ items }) {
  return Object.keys(items).length ? (
    <header>
      <HeadlineAtm type={2}>Find eCards</HeadlineAtm>
      <MenuMole items={items} />
    </header>
  ) : (<p>FU!</p>);
}

HeaderOrg.propTypes = {
  items: PropTypes.any.isRequired,
};


export default HeaderOrg;

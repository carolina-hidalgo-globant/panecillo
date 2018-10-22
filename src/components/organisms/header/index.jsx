import React from 'react';
import PropTypes from 'prop-types';
import HeadlineAtm from '../../atoms/_headline';
import MenuMole from '../../molecules/menu';
import SelectMole from '../../molecules/select';
import styles from '../../../panecillo.scss';

function HeaderOrg({ mainItems, otherItems }) {
  return Object.keys(mainItems).length && Object.keys(otherItems).length ? (
    <header className={styles.wrapper}>
      <HeadlineAtm type={2}>Find eCards</HeadlineAtm>
      <MenuMole items={mainItems} />
      <SelectMole items={otherItems} />
    </header>
  ) : (<p>Loading...</p>);
}

HeaderOrg.propTypes = {
  mainItems: PropTypes.any.isRequired,
  otherItems: PropTypes.any.isRequired,
};


export default HeaderOrg;

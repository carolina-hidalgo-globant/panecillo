import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import HeadlineAtm from '../../atoms/_headline';
import MenuMole from '../../molecules/menu';
import SelectMole from '../../molecules/select';
import styles from '../../../panecillo.scss';

function HeaderOrg({ mainItems, otherItems }) {
  return Object.keys(mainItems).length && Object.keys(otherItems).length ? (
    <header className={styles.wrapper}>
      <Row>
        <Col xs={12} md={2}>
          <div className={styles.headline}><HeadlineAtm type={2}>Find eCards</HeadlineAtm></div>
        </Col>
        <Col xs={12} md={8}>
          <MenuMole items={mainItems} />
        </Col>
        <Col xs={12} md={2}>
          <SelectMole
            title={
              (
                <Fragment>
                  <FontAwesomeIcon icon="heart" />
                  Favorites!!
                </Fragment>
              )
            }
            items={otherItems}
          />
        </Col>
      </Row>
    </header>
  ) : (<p>Loading...</p>);
}

HeaderOrg.propTypes = {
  mainItems: PropTypes.any.isRequired,
  otherItems: PropTypes.any.isRequired,
};

export default HeaderOrg;

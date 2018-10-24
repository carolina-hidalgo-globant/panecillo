import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-bootstrap';
import HeadlineAtm from '../../atoms/_headline';
import MenuMole from '../../molecules/menu';
import SelectMole from '../../molecules/select';
import SkeletonAtm from '../../atoms/_skeleton';
import styles from '../../../scss/organisms/header.scss';

function HeaderOrg({ mainItems, otherItems }) {
  return Object.keys(mainItems).length && Object.keys(otherItems).length ? (
    <Grid>
      <Row className={styles.headere}>
        <Col xs={12} md={2}>
          <HeadlineAtm type={2}>Find eCards</HeadlineAtm>
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
                  Favorites
                </Fragment>
              )
            }
            items={otherItems}
          />
        </Col>
      </Row>
    </Grid>
  ) : (
    <Grid>
      <Row className={styles.headere}>
        <Col xs={12} md={2}>
          <SkeletonAtm width={195} height={63} />
        </Col>
        <Col xs={12} md={8}>
          <SkeletonAtm width={145} height={182} />
          <SkeletonAtm width={145} height={182} />
          <SkeletonAtm width={145} height={182} />
          <SkeletonAtm width={145} height={182} />
        </Col>
        <Col xs={12} md={2}>
          <SkeletonAtm width={199} height={40} />
        </Col>
      </Row>
    </Grid>
  );
}

HeaderOrg.propTypes = {
  mainItems: PropTypes.any.isRequired,
  otherItems: PropTypes.any.isRequired,
};

export default HeaderOrg;

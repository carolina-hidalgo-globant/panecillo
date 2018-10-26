import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../scss/atoms/headline.scss';

function HeadlinesAtm(props) {
  const { type, children } = props;

  switch (type) {
    case 1: return (<h1 className={styles.headline}>{children}</h1>);
    case 2: return (<h2 className={styles.headline}>{children}</h2>);
    case 3: return (<h3 className={styles.headline}>{children}</h3>);
    case 4: return (<h4 className={styles.headline}>{children}</h4>);
    case 5: return (<h5 className={styles.headline}>{children}</h5>);
    case 6: return (<h6 className={styles.headline}>{children}</h6>);
    default: return (<h1 className={styles.headline}>{children}</h1>);
  }
}

HeadlinesAtm.propTypes = {
  type: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeadlinesAtm;

import React from 'react';
import { Skeleton } from 'react-skeleton-screen';
import PropTypes from 'prop-types';
import 'react-skeleton-screen/build/skeleton.css';


function SkeletonAtm({
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) {
  return (
    <Skeleton
      width={width}
      height={height}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    />
  );
}

SkeletonAtm.defaultProps = {
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
};


SkeletonAtm.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
};

export default Skeleton;

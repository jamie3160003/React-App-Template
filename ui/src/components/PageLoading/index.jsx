import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import '../../css/pageLoading.less';

function PageLoading({ height, width, size, tip }) {
  return (
    <div className="page-loading-container" style={{ height, width }}>
      <Spin tip={tip} size={size} />
    </div>
  );
}

PageLoading.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
  tip: PropTypes.string,
};

PageLoading.defaultProps = {
  height: undefined,
  width: undefined,
  size: undefined,
  tip: 'Loading...',
};

export default PageLoading;

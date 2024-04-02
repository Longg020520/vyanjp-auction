import React, { useMemo } from 'react';
import './StarBuyer.scss';
import { Row } from 'antd';
import SidebarCategoryStarBuyer from './SidebarCategoryStarBuyer/SidebarCategoryStarBuyer';
import ContentCategoryStarBuyer from './ContentCategoryStarBuyer/ContentCategoryStarBuyer';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const StarBuyer = () => {
  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  return (
    <Row className="starbuyer-container">
      {!isMobile && <SidebarCategoryStarBuyer span={6} />}
      <ContentCategoryStarBuyer span={!isMobile ? 18 : 24} />
    </Row>
  );
};

export default React.memo(StarBuyer);

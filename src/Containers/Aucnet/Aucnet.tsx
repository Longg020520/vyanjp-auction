import React, { useMemo } from 'react';
import './Aucnet.scss';
import { Row } from 'antd';
import SidebarCategory from './SidebarCategory/SidebarCategory';
import ContentCategory from './ContentCategory/ContentCategory';
import useGetCategoryAucnet from './hooks/useGetCategoryAucnet';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Aucnet = () => {
  useGetCategoryAucnet();

  const { width } = useWindowDimensions();

  const isMobile = useMemo(() => width < 640, [width]);

  return (
    <Row className="Aucnet-container">
      {!isMobile && <SidebarCategory span={6} />}
      <ContentCategory span={!isMobile ? 18 : 24} />
    </Row>
  );
};

export default React.memo(Aucnet);

import React, { useState } from 'react';
import './CarouselImageStarBuyer.scss';
import { Col, Modal } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface PT {
  listImage: string[];
  span: number;
}

const CarouselImageStarBuyer: React.FC<PT> = ({ listImage, span }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string>('');
  const [indexImage, setIndexImage] = useState<number>(0);

  const showModal = (index: number) => {
    setIsModalOpen(true);
    setImage(listImage[index]);
    setIndexImage(index);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setImage('');
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    if (indexImage < listImage.length - 1) {
      setImage(listImage[indexImage + 1]);
      setIndexImage(indexImage + 1);
    }
  };

  const handlePrevImage = () => {
    if (indexImage > 0) {
      setImage(listImage[indexImage - 1]);
      setIndexImage(indexImage - 1);
    }
  };

  return (
    <Col span={span} className="carousel-image-starbuyer-container">
      <Carousel showArrows={true} onClickItem={(index) => showModal(index)}>
        {listImage.map((image, i) => (
          <div key={i}>
            <img alt="" src={image} />
          </div>
        ))}
      </Carousel>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        width={1000}
        footer={null}
      >
        <div className="d-flex j-center">
          <div className=" d-flex j-center" onClick={() => handlePrevImage()}>
            <LeftOutlined />
          </div>
          <img
            alt=""
            src={image && image}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
          <div className="d-flex j-center" onClick={() => handleNextImage()}>
            <RightOutlined />
          </div>
        </div>
      </Modal>
    </Col>
  );
};

export default React.memo(CarouselImageStarBuyer);

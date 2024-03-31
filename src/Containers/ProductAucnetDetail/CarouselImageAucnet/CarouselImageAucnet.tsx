import React, { useState } from "react";
import "./CarouselImageAucnet.scss";
import { Col, Modal } from "antd";
import { Carousel } from "react-responsive-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface PT {
  listImage: string[];
  listImageZoom: string[];
}

const CarouselImageAucnet: React.FC<PT> = ({ listImage, listImageZoom }) => {
  // const onChange = () => {
  //   console.log("onChange");
  // };
  // const onClickItem = () => {
  //   console.log("onClickItem");
  // };
  // const onClickThumb = () => {
  //   console.log("onClickThumb");
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const [indexImage, setIndexImage] = useState<number>(0);

  const showModal = (index: number) => {
    setIsModalOpen(true);
    setImage(listImageZoom[index]);
    setIndexImage(index);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setImage("");
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    if (indexImage < listImageZoom.length - 1) {
      setImage(listImageZoom[indexImage + 1]);
      setIndexImage(indexImage + 1);
    }
  };

  const handlePrevImage = () => {
    if (indexImage > 0) {
      setImage(listImageZoom[indexImage - 1]);
      setIndexImage(indexImage - 1);
    }
  };

  return (
    <Col span={12} className="carousel-image-container">
      <Carousel
        showArrows={true}
        // autoPlay
        onClickItem={(index) => showModal(index)}
      >
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
          <img alt="" src={image && image} />
          <div className="d-flex j-center" onClick={() => handleNextImage()}>
            <RightOutlined />
          </div>
        </div>
      </Modal>
    </Col>
  );
};

export default React.memo(CarouselImageAucnet);

import React from "react";
import "./MainFooter.scss";
import { Col, Row } from "antd";
import { FlagOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const serviceCustomer = [
  { name: "Trung tâm hỗ trợ", path: "/help-center" },
  { name: "Chính sách bảo mật", path: "/privacy-policy" },
  { name: "Câu hỏi thường gặp", path: "/faq" },
  { name: "Gửi câu hỏi", path: "/send-question" },
];

const paymentAndTransport = [
  { name: "Biểu phí dịch vụ", path: "/service-fee" },
  { name: "Phương thức thanh toán", path: "/payment-method" },
  { name: "Phí gói", path: "/package-fee" },
  { name: "Phí vận chuyển quốc tế", path: "/international-transport-fee" },
  { name: "Thủ tục giao hàng", path: "/delivery-procedure" },
];

const userManual = [
  { name: "Quy trình mua hàng", path: "/purchase-process" },
  { name: "Quy trình đấu giá", path: "/auction-process" },
  { name: "Săn phút chót", path: "/last-minute-hunt" },
  { name: "Hướng dẫn đặt hàng nhanh", path: "/quick-order-guide" },
  { name: "Về J-Point", path: "/about-j-point" },
  { name: "Tín dụng đấu giá", path: "/auction-credit" },
];

const MainFooter = () => {
  const navigate = useNavigate();
  const handleNavigateChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className="main-footer-container">
      <Row className="footer">
        <Col span={6} className="col-footer">
          <p className="title">Liên hệ</p>
          <p className="footer-item">
            <FlagOutlined /> <strong>Địa chỉ</strong>: Tòa nhà Hanoi Group, 442
            Đội Cấn, Ba Đình, Hà Nội
          </p>
          <p className="footer-item">
            <MailOutlined /> <strong>Mail</strong>: Duonglongkm@gmail.com
          </p>
        </Col>
        <Col span={6} className="col-footer">
          <p className="title">Dịch vụ khách hàng</p>
          {serviceCustomer.map((item, index) => {
            return (
              <p
                className="footer-item"
                onClick={() => handleNavigateChange(item.path)}
                key={index}
              >
                {item.name}
              </p>
            );
          })}
        </Col>
        <Col span={6} className="col-footer">
          <p className="title">Thanh Toán & Vận Chuyển</p>
          {paymentAndTransport.map((item, index) => {
            return (
              <p
                className="footer-item"
                onClick={() => handleNavigateChange(item.path)}
                key={index}
              >
                {item.name}
              </p>
            );
          })}
        </Col>
        <Col span={6} className="col-footer">
          <p className="title">Hướng Dẫn Sử Dụng </p>
          {userManual.map((item, index) => {
            return (
              <p
                className="footer-item"
                onClick={() => handleNavigateChange(item.path)}
                key={index}
              >
                {item.name}
              </p>
            );
          })}
        </Col>
        <Col span={24}>
          <div className="col-hr"></div>
        </Col>
        <Col span={12} className="col-footer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="title" style={{ marginBottom: 0 }}>
              Kết nối với Vyanjp
            </span>
            <span>
              <img
                src="https://cdn.janbox.com/image/default/2021/5/5/20210505072411.png"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://cdn.janbox.com/image/default/2021/5/5/20210505085117.png"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://cdn.janbox.com/image/default/2021/8/16/20210816085803.png"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://cdn.janbox.com/image/default/2021/8/16/20210816085814.png"
                alt=""
              />
            </span>
          </div>
        </Col>
        <Col span={12} className="col-footer"></Col>
      </Row>
      <div className="coppy-right">
        Copyright © 2018 - 2024 Vyanjp. All Rights Reserved.
      </div>
    </div>
  );
};

export default React.memo(MainFooter);

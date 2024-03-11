import React from "react";
import "./VyanInfor.scss";

const VyanInfor = () => {
  return (
    <div className="infor-container">
      <div className="title">Vyanjp Auction là gì? </div>
      <p className="content">
        VyanJb Auction – Ứng dụng mua hàng xuyên biên giới. Giúp khách hàng mua
        & đấu giá hàng tỷ sản phẩm đến từ Nhật Bản, Mỹ. Gửi hàng đi hơn 220 quốc
        gia trên thế giới nhanh chóng, thuận tiện, tối ưu cước phí vận chuyển
        với dịch vụ gom, gộp kiện hàng miễn phí. Quy trình mua sắm đơn giản, dễ
        dàng.
      </p>
      <div className="title">Tại sao chọn chúng tôi?</div>
    </div>
  );
};

export default React.memo(VyanInfor);

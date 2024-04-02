import React from 'react';
import './RankDescription.scss';
import { RANK_CATEGORY_STARBUYER } from '../../../../constants';

const RankDescription = () => {
  return (
    <div className="rank-description-container">
      <h2>Rank Description</h2>

      {RANK_CATEGORY_STARBUYER.map((item, index) => {
        return (
          <p key={index}>
            <span className="text-bold">Rank {item.rankCode}:  </span>
            {item.rankDescription}
          </p>
        );
      })}
      <p>
        Cấp độ sản phẩm là mô tả về tình trạng của sản phẩm. Tình trạng của phụ
        kiện như hộp ngoài, Túi Bụi, thẻ bảo hành, v.v. có thể không được bao
        gồm.
      </p>
      <p>
        Đối với các sản phẩm sử dụng da hiếm như da Nume, ngay cả khi chưa sử
        dụng, có thể thấy một số thay đổi màu sắc hoặc vết trầy xước tùy thuộc
        vào đặc tính của vật liệu. Vui lòng lưu ý.
      </p>
      <p>
        Các sản phẩm như các mặt hàng cổ điển mà giá trị sản phẩm tăng theo thời
        gian có thể không áp dụng cho tuyên bố trên.
      </p>
    </div>
  );
};

export default React.memo(RankDescription);

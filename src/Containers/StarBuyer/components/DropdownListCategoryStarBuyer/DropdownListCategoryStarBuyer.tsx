import React from 'react';
import './DropdownListCategoryStarBuyer.scss';
// import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'react-feather';

interface PT {
  categoryName?: string;
  path?: string;
  category?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  children: {
    rankCode: string;
    rankDescription: string;
  }[];
}

const DropdownListCategoryStarBuyer: React.FC<PT> = ({
  categoryName,
  isOpen,
  setIsOpen,
  children,
  category,
}) => {
  // const navegate = useNavigate();
  // const handlePath = (path: string) => {
  //   navegate(path);
  // };
  const navigateProductRank = (productRank: string) => {
    let query = '/vyanjp-auction/starbuyer/product?';
    if (category) query = query.concat(`category=${category}&`);
    window.location.replace(`${query}productRank=` + productRank);
    // console.log(window.location.pathname + `?maker=` + maker);
  };
  return (
    <div className="dropdown-category-starbuyer-container">
      <div className="dropdown-header" onClick={() => setIsOpen()}>
        <p className="categoryName">{categoryName}</p>
        <p className="icon">{isOpen ? <ChevronDown /> : <ChevronUp />}</p>
      </div>
      {isOpen &&
        children.map((item, index) => (
          <div
            key={index}
            className="children-category"
            onClick={() => navigateProductRank(item.rankCode)}
          >
            <p className="categoryName">Rank: {item.rankCode}</p>
          </div>
        ))}
    </div>
  );
};

export default React.memo(DropdownListCategoryStarBuyer);

{
  /* <UpOutlined /> */
}

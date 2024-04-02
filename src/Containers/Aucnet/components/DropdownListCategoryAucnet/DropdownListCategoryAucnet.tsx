import React from 'react';
import './DropdownListCategoryAucnet.scss';
// import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'react-feather';

interface PT {
  categoryName?: string;
  path?: string;
  genre?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  children: {
    maker: string;
  }[];
}

const DropdownListCategoryAucnet: React.FC<PT> = ({
  categoryName,
  isOpen,
  setIsOpen,
  children,
  genre,
}) => {
  // const navegate = useNavigate();
  // const handlePath = (path: string) => {
  //   navegate(path);
  // };
  const navigateMaker = (maker: string) => {
    let query = '/vyanjp-auction/aucnet/product?';
    if (genre) query = query.concat(`genre=${genre}&`);
    window.location.replace(`${query}maker=` + maker);
    // console.log(window.location.pathname + `?maker=` + maker);
  };
  return (
    <div className="dropdown-category-aucnet-container">
      <div className="dropdown-header" onClick={() => setIsOpen()}>
        <p className="categoryName">{categoryName}</p>
        <p className="icon">{isOpen ? <ChevronDown /> : <ChevronUp />}</p>
      </div>
      {isOpen &&
        children.map((item, index) => (
          <div
            key={index}
            className="children-category"
            onClick={() => navigateMaker(item.maker)}
          >
            <p className="categoryName">{item.maker}</p>
          </div>
        ))}
    </div>
  );
};

export default React.memo(DropdownListCategoryAucnet);

{
  /* <UpOutlined /> */
}

import React from "react";
import "./DropdownListCategory.scss";
// import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "react-feather";

interface PT {
  categoryName?: string;
  path?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  children: {
    maker: string;
  }[];
}

const DropdownListCategory: React.FC<PT> = ({
  categoryName,
  isOpen,
  setIsOpen,
  children,
}) => {
  // const navegate = useNavigate();
  // const handlePath = (path: string) => {
  //   navegate(path);
  // };
  return (
    <div className="dropdown-category-container">
      <div className="dropdown-header" onClick={() => setIsOpen()}>
        <p className="categoryName">{categoryName}</p>
        <p className="icon">{isOpen ? <ChevronDown /> : <ChevronUp />}</p>
      </div>
      {isOpen &&
        children.map((item, index) => (
          <div key={index} className="children-category">
            <p className="categoryName">{item.maker}</p>
          </div>
        ))}
    </div>
  );
};

export default React.memo(DropdownListCategory);

{
  /* <UpOutlined /> */
}

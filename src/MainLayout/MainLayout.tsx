import React from "react";
import "./MainLayout.scss";
import MainHeader from "./MainHeader/MainHeader";
import HomeContainer from "../Containers/HomeContainer/HomeContainer";
import MainFooter from "./MainFooter/MainFooter";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div>
        <MainHeader />
        <div className="main-layout-main">
          <HomeContainer />
        </div>
        <MainFooter />
      </div>
    </div>
  );
};

export default React.memo(MainLayout);

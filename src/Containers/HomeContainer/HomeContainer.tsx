import React from "react";
import "./HomeContainer.scss";
import { Route, Routes } from "react-router-dom";
import { MainRoutes } from "../../Routes/routes";
import CommingSoon from "../CommingSoon/CommingSoon";

const HomeContainer = () => {
  return (
    <div className="container">
      <Routes>
        {MainRoutes.map((a, index) => (
          <Route key={index} path={a.path} element={a.element} />
        ))}
        <Route path="*" element={<CommingSoon />} />
      </Routes>
    </div>
  );
};

export default React.memo(HomeContainer);

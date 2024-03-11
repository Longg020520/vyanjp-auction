import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import vi_VN from "antd/locale/vi_VN";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import "./Style/theme.scss";
import MainLayout from "./MainLayout/MainLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider locale={vi_VN}>
          <MainLayout />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);

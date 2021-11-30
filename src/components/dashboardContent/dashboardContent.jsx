import React, { lazy, Suspense } from "react";
import "./dashboardContent.css";
import { useSelector } from "react-redux";
import { pagesNames } from "../../pagesNames/pagesNames";
import { Loading } from "../loading/loading";
const Home = lazy(() => import("../../pages/home/home"));

export const DashboardContent = (props) => {
  const themeColor = useSelector((state) => state.theme.defaultTheme);
  const selectedPage = props.selectedPage;

  return (
    <div className="dashboardContentContainer defaultShadow" style={{ backgroundColor: themeColor.color3 }}>
      <Suspense fallback={<Loading />}>{selectedPage === pagesNames.home && <Home />}</Suspense>
    </div>
  );
};

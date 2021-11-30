import React from "react";
import CustomParticles from "../customParticles/customParticles";
import "./dashboardCard.css";

export const DashboardCard = (props) => {
  return (
    <div className="dashboradCardContainer shadow" dir={props.dir} style={props.style}>
      <CustomParticles />
      <div className="titleConatainer d-flex align-items-center justify-content-between pt-3 px-3">
        <span>{props.title}</span>
        <span>{props.value}</span>
      </div>
      <div className="chartContainer clearfix">{props.children}</div>
    </div>
  );
};

import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/loading.json";
import "./loading.css";

export const Loading = () => {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Lottie
        options={{
          animationData: loadingAnimation,
          autoplay: true,
        }}
        isClickToPauseDisabled
        width={250}
        height={250}
      />
    </div>
  );
};

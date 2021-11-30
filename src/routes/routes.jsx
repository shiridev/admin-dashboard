import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { pagesNames } from "../pagesNames/pagesNames";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App page={pagesNames.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import { Button } from "react-bootstrap";
import "./customButton.css";

export const CustomButton = (props) => {
  return (
    <Button className="customBtn" style={props.style}>
      {props.children}
    </Button>
  );
};

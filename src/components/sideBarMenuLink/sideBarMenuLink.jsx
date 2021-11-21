import "./sideBarMenuLink.css";
import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";

export const SideBarMenuLink = (props) => {
  const sidebarCollapse = useSelector((state) => state.sidebar.sidebarCollapse);
  const language = useSelector((state) => state.language.defaultLanguage);

  return (
    <OverlayTrigger placement={language.persian ? 'left' : 'right'} overlay={<Tooltip style={{ fontFamily: "IRANSans", fontSize: "0.8em" }}>{props.title}</Tooltip>}>
      {({ ref, ...triggerHandler }) => (
        <Button
          ref={ref}
          {...(props.screenWidth > 768 && sidebarCollapse ? { ...triggerHandler } : null)}
          className="sideBarMenuButtonContainer"
          style={{ backgroundColor: props.isActive ? "#8E8D92" : "#495057" }}
          onClick={props.onClick}
          dir={language.direction}
        >
          <div className="d-flex align-items-center">
            <div
              className={
                props.screenWidth <= 768
                  ? language.direction === "rtl"
                    ? "ms-3"
                    : "me-3"
                  : sidebarCollapse
                  ? ""
                  : language.direction === "rtl"
                  ? "ms-3"
                  : "me-3"
              }
            >
              {props.icon}
            </div>
            {props.screenWidth <= 768 ? (
              <span className="menuTitle">{props.title}</span>
            ) : (
              !sidebarCollapse && <span className="menuTitle">{props.title}</span>
            )}
          </div>
        </Button>
      )}
    </OverlayTrigger>
  );
};

import React, { useState } from "react";
import { Button, Collapse, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./collapseMenu.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const CollapseMenu = (props) => {
  const [open, setOpen] = useState(props.isOpen);
  const sidebarCollapse = useSelector((state) => state.sidebar.sidebarCollapse);
  const language = useSelector((state) => state.language.defaultLanguage);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <OverlayTrigger
      placement={language.persian ? "left" : "right"}
      overlay={<Tooltip style={{ fontFamily: "IRANSans", fontSize: "0.8em" }}>{props.title}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <>
          <Button
            {...(props.screenWidth > 768 && sidebarCollapse ? { ...triggerHandler } : null)}
            ref={ref}
            className="collapseMenuButton"
            dir={language.direction}
            style={{ backgroundColor: open ? "#ef3121" : "#495057" }}
            onClick={toggle}
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
            {props.screenWidth <= 768 ? (
              <MdKeyboardArrowDown size="1.2em" style={{ transition: "0.2s ease-in-out", transform: open ? "Rotate(180deg)" : "Rotate(0deg)" }} />
            ) : (
              !sidebarCollapse && (
                <MdKeyboardArrowDown size="1.2em" style={{ transition: "0.2s ease-in-out", transform: open ? "Rotate(180deg)" : "Rotate(0deg)" }} />
              )
            )}
          </Button>
          <Collapse in={open}>
            <div>{props.children}</div>
          </Collapse>
        </>
      )}
    </OverlayTrigger>
  );
};

export default CollapseMenu;

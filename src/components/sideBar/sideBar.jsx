import React from "react";
import "./sideBar.css";
import "../../styles.css";
import logo from "../../images/logo.png";
import miniLogo from "../../images/miniLogo.png";
import CollapseMenu from "../collapseMenu/collapseMenu";
import {
  BsCash,
  BsFillCreditCard2BackFill,
  BsFillGridFill,
  BsFillHandbagFill,
  BsFillPeopleFill,
  BsFillPlusCircleFill,
  BsSearch,
} from "react-icons/bs";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { SideBarMenuLink } from "../sideBarMenuLink/sideBarMenuLink";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sidebarStateSlice } from "../../redux/sidebar/sidebarStateSlice";

export const SideBar = (props) => {
  const sidebarCollapse = useSelector((state) => state.sidebar.sidebarCollapse);
  const defaultLanguage = useSelector((state) => state.language.defaultLanguage);
  const themeColor = useSelector((state) => state.theme.defaultTheme);

  const dispatch = useDispatch();

  if (props.screenWidth <= 768) {
    return (
      <Offcanvas
        show={sidebarCollapse}
        placement={defaultLanguage.direction === "rtl" ? "end" : "start"}
        onHide={() => dispatch(sidebarStateSlice.actions.toggleCollapseSidebar(false))}
      >
        <Offcanvas.Header
          className="sideBarLogoContainer"
          style={{ height: 65, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: themeColor.color3 }}
        >
          <Offcanvas.Title dir={defaultLanguage.direction}>
            <img src={logo} alt="logo" style={{ objectFit: "contain", height: 50 }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0" style={{ backgroundColor: themeColor.color3 }}>
          <div className="sideBarMenuContainer">
            <CollapseMenu icon={<BsFillHandbagFill />} title={defaultLanguage.sale} screenWidth={props.screenWidth}>
              <SideBarMenuLink icon={<BsFillPlusCircleFill />} title={defaultLanguage.registerNewOrder} screenWidth={props.screenWidth} />
              <SideBarMenuLink icon={<RiBarChartHorizontalFill />} title={defaultLanguage.orders} screenWidth={props.screenWidth} />
              <SideBarMenuLink icon={<BsFillGridFill />} title={defaultLanguage.products} screenWidth={props.screenWidth} />
            </CollapseMenu>
            <CollapseMenu icon={<BsCash />} screenWidth={props.screenWidth} title={defaultLanguage.financial} sidebarCollapse={sidebarCollapse}>
              <SideBarMenuLink icon={<BsFillCreditCard2BackFill />} title={defaultLanguage.walletCharge} screenWidth={props.screenWidth} />
              <SideBarMenuLink icon={<RiBarChartHorizontalFill />} title={defaultLanguage.transactions} screenWidth={props.screenWidth} />
            </CollapseMenu>
            <CollapseMenu icon={<BsFillPeopleFill />} title={defaultLanguage.consumers} screenWidth={props.screenWidth}>
              <SideBarMenuLink icon={<BsFillPlusCircleFill />} title={defaultLanguage.addConsumer} screenWidth={props.screenWidth} />
              <SideBarMenuLink icon={<BsSearch />} title={defaultLanguage.searchConsumers} screenWidth={props.screenWidth} />
            </CollapseMenu>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    );
  } else {
    return (
      <div className="sideBarContainer defaultShadow" style={{ backgroundColor: themeColor.color3, width: sidebarCollapse ? 75 : 290 }}>
        <div
          className="sideBarLogoContainer"
          dir={defaultLanguage.direction}
          style={{ paddingRight: sidebarCollapse ? 0 : 20, paddingLeft: sidebarCollapse ? 0 : 20 }}
        >
          {!sidebarCollapse ? (
            <img src={logo} alt="logo" style={{ objectFit: "contain", height: 50 }} />
          ) : (
            <img src={miniLogo} alt="logo" style={{ objectFit: "contain", height: 50 }} />
          )}
        </div>
        <div className="sideBarMenuContainer">
          <CollapseMenu icon={<BsFillHandbagFill />} title={defaultLanguage.sale} sidebarCollapse={sidebarCollapse} screenWidth={props.screenWidth}>
            <SideBarMenuLink
              icon={<BsFillPlusCircleFill />}
              title={defaultLanguage.registerNewOrder}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
            <SideBarMenuLink
              icon={<RiBarChartHorizontalFill />}
              title={defaultLanguage.orders}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
            <SideBarMenuLink
              icon={<BsFillGridFill />}
              title={defaultLanguage.products}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
          </CollapseMenu>
          <CollapseMenu icon={<BsCash />} screenWidth={props.screenWidth} title={defaultLanguage.financial} sidebarCollapse={sidebarCollapse}>
            <SideBarMenuLink
              icon={<BsFillCreditCard2BackFill />}
              title={defaultLanguage.walletCharge}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
            <SideBarMenuLink
              icon={<RiBarChartHorizontalFill />}
              title={defaultLanguage.transactions}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
          </CollapseMenu>
          <CollapseMenu
            icon={<BsFillPeopleFill />}
            title={defaultLanguage.consumers}
            sidebarCollapse={sidebarCollapse}
            screenWidth={props.screenWidth}
          >
            <SideBarMenuLink
              icon={<BsFillPlusCircleFill />}
              title={defaultLanguage.addConsumer}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
            <SideBarMenuLink
              icon={<BsSearch />}
              title={defaultLanguage.searchConsumers}
              sidebarCollapse={sidebarCollapse}
              screenWidth={props.screenWidth}
            />
          </CollapseMenu>
        </div>
      </div>
    );
  }
};

import "./dashboardTitle.css";
import "../../styles.css";
import { Button, Dropdown } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoExit } from "react-icons/io5";
import profile from "../../images/profile.jpg";
import React, { Component } from "react";
import { connect } from "react-redux";
import { sidebarStateSlice } from "../../redux/sidebar/sidebarStateSlice";
import { ThemeSwitcher } from "../themeSwitcher/themeSwitcher";
import { LanguageSwitcher } from "../languageSwitcher/languageSwitcher";

class DahsboardTitle extends Component {
  render() {
    const sidebarCollapse = this.props.sidebar.sidebarCollapse;
    const defaultLanguage = this.props.language.defaultLanguage;
    const themeColor = this.props.theme.defaultTheme;

    return (
      <div className="dashboardTitleContainer defaultShadow" style={{ backgroundColor: themeColor.color3 }}>
        <div className="d-flex align-items-center">
          <Button className="collapseSidebarButton" onClick={() => this.props.dispatch(sidebarStateSlice.actions.toggleCollapseSidebar())}>
            <AiOutlineMenu style={{ transition: "0.3s", transform: sidebarCollapse ? "Rotate(90deg)" : "Rotate(0deg)" }} />
          </Button>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        {/* <span style={{ fontWeight: "bold", color: themeColor.titleColor, fontSize: "1.2em" }} className="px-3 font-weight-bold text-center w-100">
          {defaultLanguage.dashboard}
        </span> */}
        <Dropdown>
          <Dropdown.Toggle className="profile" id="dropdown-basic">
            <img src={profile} alt="avatar" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="profileDropdownMenu shadow">
            <Dropdown.Item disabled className="profileDropdownMenuItem d-flex align-items-center" href="#">
              <BsFillPersonFill size="1.5em" className={`${defaultLanguage.persian ? "ms-2" : "me-2"}`} />
              <span>{defaultLanguage.firstName + " " + defaultLanguage.lastName}</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="profileDropdownMenuItem d-flex align-items-center" href="#">
              <IoExit size="1.5em" className={`${defaultLanguage.persian ? "ms-2" : "me-2"}`} />
              <span>{defaultLanguage.signout}</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => {
    return {
      dispatch: (v) => dispatch(v),
    };
  }
)(DahsboardTitle);

// export const DahsboardTitle = (props) => {
//   const sidebarCollapse = useSelector((state) => state.sidebar.sidebarCollapse);
//   const defaultLanguage = useSelector((state) => state.language.defaultLanguage);
//   const themeColor = useSelector((state) => state.theme.defaultTheme);

//   const dispatch = useDispatch();

//   return (
//     <div className="dashboardTitleContainer defaultShadow" style={{ backgroundColor: themeColor.color3 }}>
//       <Button className="collapseSidebarButton" onClick={() => dispatch(sidebarStateSlice.actions.toggleCollapseSidebar())}>
//         <BsArrowRight style={{ transition: "0.3s", transform: sidebarCollapse ? "Rotate(180deg)" : "Rotate(0deg)" }} />
//       </Button>
//       <span style={{ fontWeight: "bold", color: themeColor.titleColor, fontSize: "1.2em" }} className="px-3 font-weight-bold text-center w-100">
//         {defaultLanguage.dashboard}
//       </span>
//       <Dropdown>
//         <Dropdown.Toggle className="profile" id="dropdown-basic">
//           <img src={profile} />
//         </Dropdown.Toggle>
//         <Dropdown.Menu className="profileDropdownMenu shadow">
//           <Dropdown.Item disabled className="profileDropdownMenuItem d-flex align-items-center" href="#">
//             <BsFillPersonFill size="1.5em" className="ms-2" />
//             <span>نام و نام خانوادگی</span>
//           </Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item className="profileDropdownMenuItem d-flex align-items-center" href="#">
//             <IoExit size="1.5em" className="ms-2" />
//             <span>خروج از حساب کاربری</span>
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   );
// };

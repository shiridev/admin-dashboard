import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { SideBar } from "./components/sideBar/sideBar";
import { DashboardContent } from "./components/dashboardContent/dashboardContent";
import ReactResizeDetector from "react-resize-detector";
import { useSelector } from "react-redux";
import DashboardTitle from "./components/dashboardTitle/dahsboardTitle";

export const App = (props) => {
  const themeColors = useSelector((state) => state.theme.defaultTheme);
  const collapseSidebar = useSelector((state) => state.sidebar.sidebarCollapse);
  const language = useSelector((state) => state.language.defaultLanguage);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => {
        return (
          <Container
            fluid={true}
            className="dashBoardMainContainer"
            style={{ backgroundColor: themeColors.color2, direction: language.direction, fontFamily: language.persian ? "IRSans" : "Montserrat" }}
          >
            <SideBar screenWidth={width} />
            <div
              className="leftContainer"
              style={{
                width: width <= 768 ? "100%" : collapseSidebar ? "calc(100% - 75px)" : "calc(100% - 290px)",
                paddingRight: width <= 768 ? 0 : language.direction === "rtl" ? 20 : 0,
                paddingLeft: width <= 768 ? 0 : language.direction === "rtl" ? 0 : 20,
                float: language.persian ? "left" : "right",
              }}
            >
              <DashboardTitle />
              <DashboardContent />
            </div>
          </Container>
        );
      }}
    </ReactResizeDetector>
  );
};

// class App extends Component {
//   state = {
//     themeColors: lightThemeColors,
//     defaultLanguage: languages.persian,
//     dir: languages.persian.direction,
//     collapseSidebar: false,
//   };

//   toggleLanguage = () => {
//     this.setState({
//       defaultLanguage: this.state.defaultLanguage === languages.english ? languages.persian : languages.english,
//       dir: this.state.defaultLanguage == languages.english ? languages.english.direction : languages.persian.direction,
//     });
//   };

//   toggleTheme = () => {
//     this.setState({ themeColors: this.state.themeColors === lightThemeColors ? darkThemeColors : lightThemeColors });
//   };

//   toggleSidebarCollapse = () => this.setState({ collapseSidebar: !this.state.collapseSidebar });

//   componentDidMount() {
//     this.setState({ dir: this.state.defaultLanguage == languages.english ? "ltr" : "rtl" });
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <ReactResizeDetector handleWidth>
//           {({ width }) => {
//             return (
//               <Container fluid={true} className="dashBoardMainContainer" style={{ backgroundColor: this.state.themeColors.color2 }}>
//                 <LanguageProvider value={{ defaultLanguage: this.state.defaultLanguage, toggleLanguage: this.toggleLanguage }}>
//                   <ThemeContextProvider value={{ themeColors: this.state.themeColors, themeToggler: this.toggleTheme }}>
//                     <SideBar sidebarCollapse={this.state.collapseSidebar} screenWidth={width} toggleSidebarCollapse={this.toggleSidebarCollapse} />
//                     <div
//                       className="leftContainer"
//                       style={{
//                         width: width <= 768 ? "100%" : this.state.collapseSidebar ? "calc(100% - 75px)" : "calc(100% - 290px)",
//                         paddingRight: width <= 768 ? 0 : 20,
//                       }}
//                     >
//                       <DahsboardTitle sidebarCollapse={this.state.collapseSidebar} toggleSidebarCollapse={this.toggleSidebarCollapse} />
//                       <DashboardContent />
//                     </div>
//                   </ThemeContextProvider>
//                 </LanguageProvider>
//               </Container>
//             );
//           }}
//         </ReactResizeDetector>
//       </Provider>
//     );
//   }
// }

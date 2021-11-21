import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./themeSwitcher.css";
import { useDispatch } from "react-redux";
import { themeStateSlice } from "../../redux/theme/themeStateSlice";
import { useSelector } from "react-redux";

export const ThemeSwitcher = React.forwardRef((props, ref) => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const dispatch = useDispatch();

  return (
    <Button
      ref={ref}
      className={`themeCustomSwitchContainer mx-3`}
      onClick={() => dispatch(themeStateSlice.actions.changeTheme())}
      style={{ backgroundColor: theme.lightTheme ? "#ff9e00" : "#272727" }}
    >
      <div className="iconContainer">{theme.lightTheme ? <BsFillSunFill color="#ff9e00" /> : <BsFillMoonFill color="#272727" />}</div>
    </Button>
  );
});

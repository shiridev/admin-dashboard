import React from "react";
import { Button } from "react-bootstrap";
import "./languageSwitcher.css";
import { useDispatch } from "react-redux";
import { languageStateSlice } from "../../redux/language/languageStateSlice";
import { useSelector } from "react-redux";
import usaFlage from "../../images/usa-flag.png";
import iranFlag from "../../images/iran-flag.png";

export const LanguageSwitcher = React.forwardRef((props, ref) => {
  const theme = useSelector((state) => state.theme.defaultTheme);
  const language = useSelector((state) => state.language.defaultLanguage);
  const dispatch = useDispatch();

  return (
    <Button
      ref={ref}
      className="languageCustomSwitchContainer"
      onClick={() => dispatch(languageStateSlice.actions.changeLanguage())}
      style={{ backgroundColor: theme.lightTheme ? "#ff9e00" : "#272727" }}
    >
      <div className="languageIconContainer">
        {language.persian ? <img src={iranFlag} height={20} alt='iran flag' /> : <img src={usaFlage} height={20} alt='usa flag' />}
      </div>
    </Button>
  );
});

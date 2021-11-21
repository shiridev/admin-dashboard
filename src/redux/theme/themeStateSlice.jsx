import { createSlice } from "@reduxjs/toolkit";
import { darkThemeColors, lightThemeColors } from "./themeTypesColors";

const themeStateSlice = createSlice({
  name: "theme",
  initialState: {
    defaultTheme: lightThemeColors,
    user: null,
  },

  reducers: {
    changeTheme: (state) => {
      if (state.defaultTheme.lightTheme) {
        state.defaultTheme = darkThemeColors;
      } else {
        state.defaultTheme = lightThemeColors;
      }
    },
  },
});

export { themeStateSlice };

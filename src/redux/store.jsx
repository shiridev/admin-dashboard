import { configureStore } from "@reduxjs/toolkit";
import { themeStateSlice } from "../redux/theme/themeStateSlice";
import { languageStateSlice } from "../redux/language/languageStateSlice";
import { sidebarStateSlice } from "../redux/sidebar/sidebarStateSlice";

export default configureStore({
  reducer: {
    theme: themeStateSlice.reducer,
    language: languageStateSlice.reducer,
    sidebar: sidebarStateSlice.reducer,
  },
});

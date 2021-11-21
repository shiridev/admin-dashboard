import { createSlice } from "@reduxjs/toolkit";

const sidebarStateSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarCollapse: false,
  },

  reducers: {
    toggleCollapseSidebar: (state, param) => {
      if (param.payload) {
        state.sidebarCollapse = param.payload;
      } else if (state.sidebarCollapse) {
        state.sidebarCollapse = false;
      } else {
        state.sidebarCollapse = true;
      }
    },
  },
});

export { sidebarStateSlice };

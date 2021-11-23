import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../../languages/languages";

const languageStateSlice = createSlice({
  name: "language",
  initialState: {
    defaultLanguage: languages.english,
    dir: languages.english.direction,
  },

  reducers: {
    changeLanguage: (state) => {
      if (state.defaultLanguage.persian) {
        state.defaultLanguage = languages.english;
        state.dir = languages.english.direction;
      } else {
        state.defaultLanguage = languages.persian;
        state.dir = languages.persian.direction;
      }
    },
  },
});

export { languageStateSlice };

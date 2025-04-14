
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("themeMode") || "light", 
  },
  reducers: {
    toggleMode: (state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode); 
      state.mode = newMode;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;

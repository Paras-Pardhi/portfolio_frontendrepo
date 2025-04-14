import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./Slices/ThemeSlice";
import projectSlice from "./Slices/ProjectSlice";
import registerSlice from "./Slices/RegisterSlice";
import loginSlice from "./Slices/LoginSlice";
import postProjectSlice from './Slices/PostProjectSlice'
import projectDetailSlice from "./Slices/ProjectDetailSlice";

export const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        project: projectSlice,
        register:registerSlice,
        login:loginSlice,
        postProject:postProjectSlice,
        projectDetail:projectDetailSlice,
    },

})
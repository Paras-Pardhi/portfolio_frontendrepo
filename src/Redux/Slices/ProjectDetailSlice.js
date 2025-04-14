import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';

export const getProjectDetails = createAsyncThunk('projectDetail/getProjectDetail', async(id) =>{
    try {
        const response = await axios.get(`https://portfolio-backend-2ts0.onrender.com/api/v1/admin/${id}`);
        toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message || error.message || 'Failed to fetch projects');
        throw error
    }
})

export const deleteProject = createAsyncThunk(
    "projectDetail/deleteProject",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`https://portfolio-backend-2ts0.onrender.com/api/v1/admin/deleteProject/${id}`, {
            withCredentials: true,
        });
        toast.success(response.data.message);
        return response.data;
      } catch (error) {
        toast.error(errorMessage);
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const updateProject = createAsyncThunk('projectDetail/updateProject',
   async({id, projectData}, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://portfolio-backend-2ts0.onrender.com/api/v1/admin/updateProject/${id}`,
       projectData, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(errorMessage);
      return rejectWithValue(error.response.data);
    }
  })
  

const projectDetailSlice = createSlice({
    name: "projectDetail",
    initialState: {
        loading:false,
        project:null,
        error:'',
        projectUpdateStatus: 'idle'
    },
    reducers: {
      resetProjectUpdateStatus(state) {
        state.projectUpdateStatus = 'idle';
      },
    },
    extraReducers: (builder) => {
        builder
               .addCase(getProjectDetails.pending, (state) => {
                 state.loading = true;
                 state.error = '';
               })
               .addCase(getProjectDetails.fulfilled, (state, action) => {
                 state.loading = false;
                 state.project = action.payload.project;
                 state.error = '';
               })
               .addCase(getProjectDetails.rejected, (state, action) => {
                 state.loading = false;
                 state.error = action.payload || 'Something went wrong'
               })
               .addCase(deleteProject.pending, (state) => {
                state.loading = true;
                state.error = '';
              })
              .addCase(deleteProject.fulfilled, (state, action) => {
                state.loading = false;
                state.project = null;
                state.error = '';
              })
              .addCase(deleteProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to delete project';
              })
               .addCase(updateProject.pending, (state) => {
                state.loading = true;
                state.error = '';
              })
              .addCase(updateProject.fulfilled, (state, action) => {
                state.projectUpdateStatus = 'succeeded';
                state.loading = false;
                state.project = action.payload.project;
                state.error = '';
              })
              .addCase(updateProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to update project';
              });
    },
});

export const {
  resetProjectUpdateStatus,
} = projectDetailSlice.actions;

export const getProjectDetailList = (state) => state.projectDetail.project;
export const getProjectDetailLoading = (state) => state.projectDetail.loading;
export const getProjectDetailError = (state) => state.projectDetail.error;
export const getProjectUpdateStatus = (state) => state.projectDetail.projectUpdateStatus;


export default projectDetailSlice.reducer;
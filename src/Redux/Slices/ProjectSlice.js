import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast  from 'react-hot-toast';
import axios from 'axios';

export const getProjectListData = createAsyncThunk('project/projectListData', async () => {
    try {
        const response = await axios.get('https://portfolio-backend-2ts0.onrender.com/api/v1/admin/getAllProjects');
        return response.data.AllProjects;
    } catch (error) {
        toast.error(error.response?.data?.message || error.message || 'Failed to fetch projects');
    }

})

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        loading: false,
        list: [],
        error: '',
    },
    extraReducers: (builder) => {
        builder.addCase(getProjectListData.pending, (state) => {
            state.loading = true;
        })
            .addCase(getProjectListData.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getProjectListData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong'
            })
    },
})

export const getAllProjectList = (state) => state.project.list
export const getAllProjectLoading = (state) => state.project.loading
export const getAllProjectError = (state) => state.project.error

export default projectSlice.reducer;
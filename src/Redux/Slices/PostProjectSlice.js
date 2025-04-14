import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
    title: '',
    subTitle: '',
    category: '',
    description: '',
    technology:[],
    status: 'idle',
    error: null,
};

export const postProjectData = createAsyncThunk(
    'postproject/projectData',
    async (projectData, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append('title', projectData.title);
            formData.append('subTitle', projectData.subTitle);
            formData.append('category', projectData.category);
            formData.append('description', projectData.description);
            formData.append('technology', JSON.stringify(projectData.technology));
            formData.append('projectIcon', projectData.projectIcon);

            const response = await axios.post(
                'https://portfolio-backend-2ts0.onrender.com/api/v1/admin/postProject',
                formData,
                {
                    headers: {
                        'Content-Type': "multipart/form-data",
                    },
                    withCredentials: true,
                }
            );
            toast.success(response.data.message);
            return response.data;
        } 
        catch (error) {
            const message = error.response?.data?.message || error.message || 'Something went wrong!';
            toast.error(message);
            return thunkAPI.rejectWithValue({ message });
        }
    }
);

const postProjectSlice = createSlice({
    name: 'postproject',
    initialState,
    reducers: {
        setField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postProjectData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postProjectData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.title = '';
                state.subTitle = '';
                state.category = '';
                state.description = '';
                state.technology = [];
                state.error = null;
            })
            .addCase(postProjectData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setField } = postProjectSlice.actions;

export default postProjectSlice.reducer;

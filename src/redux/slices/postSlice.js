import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState={
    posts:[],
    errors: null,
    loading: null,
    selectedPost: null
};
const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        setSelectedPost: (state,action)=>{
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAll.rejected, (state,action)=>{
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state,action)=>{
                state.selectedPost = action.payload
            })
})
const getAll = createAsyncThunk(
    'postSlice/getAll',
    async(_, {rejectWithValue})=>{
        try{
            const {data} = await postService.getAll()
            return data
        }
        catch (e) {
            return rejectWithValue(e.response.data)
        }
});
const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
           const {data} = await postService.getById(id);
           return data
        }
        catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
const {reducer:postReducer, actions:{setSelectedPost}}= postSlice;
const postActions ={
    getAll,
    setSelectedPost,
    getById
}

export {
    postReducer,
    postActions
}
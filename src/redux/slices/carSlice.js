import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState ={
    cars:[],
    prev:null,
    next: null,
    errors: null,
    loading:null,
    updateCar:null
};
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setUpdateCar:(state,action)=>{
            state.updateCar = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                const {items, prev, next}= action.payload
                state.cars = items;
                state.prev = prev;
                state.next = next;
                state.loading = false
            })
            .addDefaultCase((state,action)=>{
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, {rejectWithValue})=>{
        try {
            const {data}= await carService.getAll(page)
            return data
        }
        catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI)=>{
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll({page:1}))
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const {reducer: carReducer, actions:{setUpdateCar}} = carSlice;

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI)=>{
        try {
            await carService.updateById(id, car)
            thunkAPI.dispatch(getAll({page:1}))
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id, page},thunkAPI)=>{
       try {
           await carService.deleteById(id)
           thunkAPI.dispatch(getAll({page:1}))
       }
       catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
       }

    })

const carActions={
    getAll,
    create,
    setUpdateCar,
    updateById,
    deleteById
}

export {
    carActions,
    carReducer
}

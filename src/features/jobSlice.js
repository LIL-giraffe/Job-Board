import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllJobs=createAsyncThunk("jobDetails",async ()=>{
    const data = await fetch(" http://localhost:3031/jobs");
    const result = data.json();
    return result
    
})


export const jobDetails=createSlice({
    name:"jobDetails",
    initialState:{
        jobs:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder) =>{
        builder.addCase(getAllJobs.pending, (state)=>{
            state.loading=true;
        })
        builder.addCase(getAllJobs.fulfilled, (state,action)=>{
            state.loading=false;
            state.jobs=action.payload;
        })
        builder.addCase(getAllJobs.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    },
})


export default jobDetails.reducer;
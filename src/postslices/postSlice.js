import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";



export const getPosts = createAsyncThunk('post/getPosts',async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await response.json()
    return data
})

const initialState={
    isLoading:false,
    data:[],
}
const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getPosts.pending]: (state)=>{
            state.isLoading=true
        },
        [getPosts.fulfilled]: (state,action)=>{
            state.isLoading=false
            state.posts=action.payload
        }
    }

})

export default postSlice.reducer
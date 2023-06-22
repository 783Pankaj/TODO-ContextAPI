import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name :"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment :(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },

        incrementByAmount : (state, action)=>{
            //Payload is a non-official, community accepted (de facto) 
            //naming convention for the property that holds the actual 
            //data in a Redux action object.
            state.value = action.payload
        },
    },
})
// Action creators are generated for each case reducer function
export const{increment, decrement,incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

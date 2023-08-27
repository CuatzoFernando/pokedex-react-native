import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
    value: number
}

const initialState: counterState = {
    value: 1
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            if(state.value > 897) state.value = 898
            state.value++;
        },
        decrement: (state) => {
            if(state.value < 2) return state
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            if (state.value + action.payload > 897) state.value = 898
            else state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            if(state.value - action.payload < 2) state.value = 1
            state.value -= action.payload
        },
        reset: (state) =>{
            state.value = initialState.value
        }
    }
})

/// export only actions
export const {
    increment, decrement, incrementByAmount, decrementByAmount, reset
} = counterSlice.actions

// export the slice itself for use in other slices and components
export default counterSlice.reducer
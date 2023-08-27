import { configureStore } from '@reduxjs/toolkit'

import counterSlice from '../features/slice/counterSlice'
import pokemonReducer from '../features/pokemon/pokemonSlice'

export const store = configureStore({
    reducer: { 
        counter: counterSlice,
        pokemon: pokemonReducer
    }
})

// export store but only type dispatch
// update state
export type AppDispatch = typeof store.dispatch

/// retsc integrated a type returntype (default), obtaining type of data of returned function
// obtaining state
export type RootState = ReturnType<typeof store.getState>


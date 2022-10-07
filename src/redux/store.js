import { configureStore } from '@reduxjs/toolkit'
// import { helloSlice } from './helloSlice'
import helloReducer from './helloSlice'
import counterSlice from './counterSlice'


export default configureStore({
    reducer: {
        // hello: helloSlice.reducer
        hello: helloReducer,
        counter: counterSlice
    }
})

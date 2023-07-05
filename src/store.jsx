import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/productslice"


const store = configureStore({
    reducer:{
      product:counterReducer
    }
})

export default store
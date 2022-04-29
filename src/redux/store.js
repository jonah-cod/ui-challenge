import { configureStore } from '@reduxjs/toolkit'
import signupDataReducer from './reducers/signupReducer'
import errorReducer from './reducers/errorReducer'

export const store = configureStore({
    reducer: {
        signupData: signupDataReducer,
        error: errorReducer,
    }
})
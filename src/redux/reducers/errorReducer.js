import { createSlice } from "@reduxjs/toolkit"


const errorSlice = createSlice({
    name: 'error',
    initialState: true,
    reducers: {
        errorUpadate: (state, action) => {
            return (state, action.payload)

        },

    }
})

export const { errorUpadate } = errorSlice.actions
export default errorSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"


const signupSlice = createSlice({
    name: 'signupData',
    initialState: {},
    reducers: {
        signupDataUpadate: (state, action) => {
            return {...state, ...action.payload }

        },
        orgDataUpdate: (state, action) => {
            return {...state, organization: {...state.organization, ...action.payload } }
        }

    }
})

export const { signupDataUpadate, orgDataUpdate } = signupSlice.actions
export default signupSlice.reducer;
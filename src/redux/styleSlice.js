import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    style: false,
    width: "",
    height: "",
    backgroundColor: "",
    display: "",
    alignItems: "",
    justifyContent: "",
    borderRadius: "",
    cursor: "",
}

export const styleSlice = createSlice({
    name: 'style',
    initialState,
    reducers: {
        addStyle: (state, data) => {
            state.width = data.width
            state.height = data.height
            state.backgroundColor = data.backgroundColor
            state.display = data.display
            state.alignItems = data.alignItems
            state.justifyContent = data.justifyContent
            state.borderRadius = data.borderRadius
            state.cursor = data.cursor
            state.style = data.style
        },
        deleteStyle: (state) => {
            state.width = ""
            state.height = ""
            state.backgroundColor = ""
            state.display = ""
            state.alignItems = ""
            state.justifyContent = ""
            state.borderRadius = ""
            state.cursor = ""
            state.style = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { addStyle, deleteStyle } = styleSlice.actions

export default styleSlice.reducer
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    onSidebarStyle: false,
    onSidebarComponents: false
}

export const styleSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebarStyle: (state) => {
            state.onSidebarStyle = true
        },
        closeSidebarStyle: (state) => {
            state.onSidebarStyle = false
        },
        openSidebarComponents: (state) => {
            state.onSidebarComponents = true
        },
        closeSidebarComponents: (state) => {
            state.onSidebarComponents = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { openSidebarStyle, closeSidebarStyle, openSidebarComponents, closeSidebarComponents } = styleSlice.actions

export default styleSlice.reducer
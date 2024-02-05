import { configureStore, createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        popup: false,
        videoId: null,
    },
    reducers: {
        openPopup: (state, actions) => {
            state.popup = true
            state.videoId = actions.payload
        },
        closePopup: (state) => {
            state.popup = false
            state.videoId = null
        }
    }
})

const store = configureStore({
    reducer: popupSlice.reducer
})

export default store;
export const { openPopup, closePopup } = popupSlice.actions;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    content: {
        header: "",
        text: ""
    },
    options: {},
    result: null
}

export const PopupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        closePopup: (state) => {
            state.isVisible = false;
            state.options = {};
            state.result = null;
        },

        showPopup: (state, action) => {
            const { header, text, options } = action.payload;
            state.content = { header, text };
            state.isVisible = true;
            state.options = options ?? {};
        },

        setResult: (state, action) => {
            state.result = action.payload;
        }
    }
})

export const { closePopup, showPopup, setResult } = PopupSlice.actions;

export const selectIsPopupVisible = (state) => state.popup.isVisible;
export const selectContent = (state) => state.popup.content;
export const selectOptions = (state) => state.popup.options;
export const selectPopupResult = (state) => state.popup.result;

const PopupReducer = PopupSlice.reducer;
export default PopupReducer;
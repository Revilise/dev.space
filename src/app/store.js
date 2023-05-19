import {configureStore} from '@reduxjs/toolkit';
import PopupReducer from "@/features/popup/PopupSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            popup: PopupReducer
        }
    })
}

const store = makeStore();
export default store;
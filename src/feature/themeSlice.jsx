
import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: 'ThemeSliceName',
    initialState: {
        themeHolder: {
            colorbg1: '',
            colorbg2: '',
            colorbg3: '',
            colortxt1: '',
            colortxt2: '',
            border: 'border duration-200',
            tabidentifier: '',
            tabidentifierhover: '',
            quizexamtoggledropdown: ''
        },
        toggleTheme: false,

    },
    reducers: {
        changeThemeState: (state, action) => {

            const whatThemeIsClicked = action.payload;

            if (whatThemeIsClicked === 'firstColor') {
                state.themeHolder.colorbg1 = '!bg-gray-900 duration-200';
                state.themeHolder.colorbg2 = '!bg-gray-800 duration-200';
                state.themeHolder.colorbg3 = '!bg-gray-700 duration-200';
                state.themeHolder.colortxt1 = '!text-gray-300 duration-200';
                state.themeHolder.colortxt2 = '!text-gray-800 duration-200';
                state.themeHolder.tabidentifier = '!bg-yellow-200 !bg-opacity-15 duration-200';
                state.themeHolder.tabidentifierhover = 'bg-gray-700 duration-200';
                state.themeHolder.quizexamtoggledropdown = 'bg-[#2C3747] duration-200';
            }

            if (whatThemeIsClicked === 'secondColor') {
                state.themeHolder.colorbg1 = '!bg-[#256D85] duration-200';
                state.themeHolder.colorbg2 = '!bg-[#2DA4CC] duration-200';
                state.themeHolder.colorbg3 = '!bg-gray-100 duration-200';
                state.themeHolder.colortxt1 = '!text-gray-800 duration-200';
                state.themeHolder.colortxt2 = '!text-gray-300 duration-200';
                state.themeHolder.tabidentifier = '!bg-[#6FBED8] duration-200';
                state.themeHolder.tabidentifierhover = 'bg-[#4AAFD1] duration-200';
                state.themeHolder.quizexamtoggledropdown = 'bg-[#5CB8D7] duration-200';      
            }
        },
        toggleThemeState: (state) => {
            state.toggleTheme = !state.toggleTheme;
        },
        clearToggleThemeState: (state) => {
            state.toggleTheme = false;
        },

    }
})

export const { changeThemeState, toggleThemeState, clearToggleThemeState } = ThemeSlice.actions;
export const themeHolderTemp = state => state.ThemeSliceName.themeHolder;
export const toggleThemeTemp = state => state.ThemeSliceName.toggleTheme;
export const themeSliceReducer = ThemeSlice.reducer;
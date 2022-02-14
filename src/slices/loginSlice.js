import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        value: "",
    },
    reducers: {
        login: (state, user) => {
            return { ...state, value: user.payload };
        },
        logout: (state) => {
            return { ...state, value: "" };
        },
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;

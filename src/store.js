import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import loginSlice from "./slices/loginSlice";

const logMiddleWare = (store) => (next) => (action) => {
    console.log("Middleware 1: Current Action : ", action);
    next(action);
};

const checkLoginMiddleware = (store) => (next) => (action) => {
    if (action.type === "login/login" || store.getState().login.value) {
        next(action);
        return;
    }
    console.error("Not logged in");
};

export default configureStore({
    reducer: {
        counter: counterSlice,
        login: loginSlice,
    },
    middleware: [logMiddleWare, checkLoginMiddleware],
});

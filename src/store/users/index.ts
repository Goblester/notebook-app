import {usersSlice} from "./users";


export const {
    removeUser
} = usersSlice.actions;

export const userReducer = usersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {UserType} from "../../types";

export interface UsersState {
    users: Array<UserType>
}

const initialState: UsersState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeUser: (state, action:PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.name === action.payload);
        },
    },
})




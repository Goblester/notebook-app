import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {UserFieldsType} from "../../types";


export interface FilterState {
    filterValue: string;
    filterField: UserFieldsType;
}

const initialState: FilterState = {
    filterValue: '',
    filterField: 'name'
}

export const filterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeFilterValue: (state, action: PayloadAction<string>) => {
            state.filterValue = action.payload;
        },
        changeFilterField: (state, action: PayloadAction<UserFieldsType>) => {
            state.filterField = action.payload;
        },
    }
})




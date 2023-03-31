import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsersApi} from "../../../libs/api/fetchUsers";
import {UserType} from "../../../types";


export const fetchUsers = createAsyncThunk<UserType[], void, {rejectValue: string}>(
    'FETCH_USERS', async (_, thunkAPI) => {
    const users = await fetchUsersApi();
    if(!users) {
        return thunkAPI.rejectWithValue('no users')
    }

    return users
})
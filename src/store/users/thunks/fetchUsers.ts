import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsersApi} from "../../../libs/api/fetchUsers";
import {UserType} from "../../../types";


export const fetchUsers = createAsyncThunk<UserType[], any, {rejectValue: string}>(
    'FETCH_USERS', async (arg, thunkAPI) => {
    const users = await fetchUsersApi();
    if(!users) {
        return thunkAPI.rejectWithValue('no users')
    }

    return users
})
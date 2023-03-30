import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsersApi} from "../../../libs/api/fetchUsers";


export const fetchUsers = createAsyncThunk('FETCH_USERS', async (arg, thunkAPI) => {
    const users = await fetchUsersApi();
    if(users) {
        thunkAPI.fulfillWithValue(users);
    }else {
        thunkAPI.rejectWithValue('no users')
    }
})
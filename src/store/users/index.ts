import {usersSlice} from "./users";
import {fetchUsers} from "./thunks/fetchUsers";


export const usersActions = {...usersSlice.actions, fetchUsers};

export const usersReducer = usersSlice.reducer;
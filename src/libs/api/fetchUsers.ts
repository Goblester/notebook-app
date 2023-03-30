import {Maybe, UserType} from "../../types";


export const fetchUsersApi = async (): Promise<Maybe<UserType[]>> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    } catch (e) {
        return null;
    }
}
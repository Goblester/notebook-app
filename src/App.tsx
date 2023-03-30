import {useEffect, useState} from 'react';
import {Users} from './components/users/users'
import {Filter} from './features/filter/filter';
import {UserFieldsType, UserType} from './types'
import {filterContext} from './store/contexts/filterContext';
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
import {usersActions} from "./store/users";



export default function App() {

    const [filterValue, setFilterValue] = useState<string>('');
    const [filterField, setFilterField] = useState<UserFieldsType>('name');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch((usersActions.fetchUsers()));
    }, [])

    return (
        <filterContext.Provider value={{
            filterValue,
            filterField,
            setFilterValue,
            setFilterField
        }}>
            <main className="container mx-auto flex flex-col items-center">
                <Filter/>
                <Users />
            </main>
        </filterContext.Provider>

    )
}

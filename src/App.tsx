import {useEffect, useState} from 'react';
import {Users} from './components/users/users'
import {Filter} from './features/filter/filter';
import {UserFieldsType, UserType} from './types'
import {filterContext} from './store/contexts/filterContext';

const fetchUsers = async (): Promise<Array<UserType>> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (e) {
        return [];
    }
}

const defaultUsers: Array<UserType> = [];

export default function App() {

    const [users, setUsers] = useState<Array<UserType>>(defaultUsers);
    const [filterValue, setFilterValue] = useState<string>('');
    const [filterField, setFilterField] = useState<UserFieldsType>('name');


    useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users);
        })
    }, [])

    return (
        <filterContext.Provider value={{
            filterValue,
            filterField,
            setFilterValue,
            setFilterField
        }}>
            <main className="container">
                <Filter/>
                <Users users={users}/>
            </main>
        </filterContext.Provider>

    )
}

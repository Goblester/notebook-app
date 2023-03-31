import {useEffect} from 'react';
import {Users} from './components/users/users'
import {Filter} from './features/filter/filter';
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/store";
import {usersActions} from "./store/users";
import {NewUser} from "./features/newUser/newUser";


export default function App() {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch((usersActions.fetchUsers()));
    }, []);

    return (
        <div>
            <header className="h-16 w-full drop-shadow-md bg-blue-200 p-5">Contacts</header>
            <main className="container mx-auto flex mt-10">
                <div className="flex flex-col items-center w-8/12">
                    <Filter/>
                    <Users/>
                </div>
                <aside className="w-4/12">
                    <NewUser/>
                </aside>
            </main>
        </div>
    )
}

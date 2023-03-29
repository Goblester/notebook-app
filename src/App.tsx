import { useEffect, useState } from 'react';
import './App.css'
import { Users } from './components/users/users'
import { Filter } from './features/filter/filter';
import { UserFieldsType, UserType } from './types'
import { filterContext } from './store/contexts/filterContext';

const fetchUsers = async (): Promise<Array<UserType>> => {
  try{
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
  },[])
  
  return (
    <filterContext.Provider value={{
      filterValue,
      filterField,
      setFilterValue,
      setFilterField
    }}>
          <main>
      <Filter />
      <Users users={users}/>
    </main>
    </filterContext.Provider>

  )
}



// https://jsonplaceholder.typicode.com/users


// name, phone, email



// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
import React, { useContext } from "react";
import { filterContext } from "../../store/contexts/filterContext";
import { UserFieldsType, UserType } from "../../types";
import { User } from "../user/user";
import {useSelector} from "react-redux";
import {getUsers} from "../../store/users/selectors";


/** 
* function for creating user filter callbacks
* @param {string} filterValue - current filter value
* @param {UserFieldsType} filterField - current filter field
* @returns {function} - callback to filter users
*/
const getUserFilter = (filterValue: string, filterField: UserFieldsType) => (user: UserType) => user[filterField]?.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())

export const Users: React.FC = React.memo(() => {

  const {filterValue, filterField} = useContext(filterContext);
  const users = useSelector(getUsers);

  const filteredUsers = users.filter(getUserFilter(filterValue, filterField)).map(user => (
    <li key={user.name} className="h-48 w-64 bg-gray-200 rounded-md drop-shadow-md">
      <User {...user} />
    </li>));

  if (!filteredUsers.length) {
    return (
      <div>no users</div>
    )
  }
  
  return <ul className="flex flex-wrap gap-4 mx-auto">
    {filteredUsers}
  </ul>
});
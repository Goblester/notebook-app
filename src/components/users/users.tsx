import { useContext } from "react";
import { filterContext } from "../../store/contexts/filterContext";
import { UserFieldsType, UserType } from "../../types";
import { User } from "../user/user";

type PropsType = {
  users: Array<UserType>
}

/** 
* function for creating user filter callbacks
* @param {string} filterValue - current filter value
* @returns {function} - callback to filter users
*/
const getUserFilter = (filterValue: string, filterField: UserFieldsType) => (user: UserType) => user[filterField]?.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())

export const Users: React.FC<PropsType> = ({users}) => {

  const {filterValue, filterField} = useContext(filterContext);

  const filteredUsers = users.filter(getUserFilter(filterValue, filterField)).map(user => (
    <li key={user.name}>
      <User {...user} />
    </li>));

  if (!filteredUsers.length) {
    return (
      <div>no users</div>
    )
  }
  
  return <ul>
    {filteredUsers}
  </ul>
}
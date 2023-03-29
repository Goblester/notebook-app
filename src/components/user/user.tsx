import { useContext } from "react";
import { filterContext } from "../../store/contexts/filterContext";
import {UserField} from '../userField/userField';

type PropsType = {
  name: string;
  email: string;
  phone: string;
}


export const User: React.FC<PropsType> = ({email, name, phone}) => {
  
  const {filterValue, filterField} = useContext(filterContext);

  const nameFilter = filterField === 'name' ? filterValue : '';
  const emailFilter = filterField === 'email' ? filterValue : '';
  const phoneFilter = filterField === 'phone' ? filterValue : '';

  return (
    <div>
      <p>name: <UserField value={name} matchValue={nameFilter} /></p>
      <p>email: <UserField value={email} matchValue={emailFilter} /></p>
      <p>phone:<UserField value={phone} matchValue={phoneFilter} /></p>
    </div>
  )
}
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
      <button className="absolute right-2 top-2 rounded-full bg-red-400 w-8 h-8 opacity-50 hover:opacity-100  outline-transparent
      before:absolute before:bg-white before:w-0.5 before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:rotate-45 before:h-6
      after:absolute after:bg-white after:w-0.5 after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-rotate-45 after:h-6" type="button" aria-label="close button" />
      <p>name: <UserField value={name} matchValue={nameFilter} /></p>
      <p>email: <UserField value={email} matchValue={emailFilter} /></p>
      <p>phone:<UserField value={phone} matchValue={phoneFilter} /></p>
    </div>
  )
}
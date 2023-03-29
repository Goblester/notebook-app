import { useCallback, useContext, useState } from "react";
import { filterContext } from "../../store/contexts/filterContext";
import { UserFieldsType } from "../../types";
import { debounce } from "../../utils/debounce/debounce";


const userFields: Array<UserFieldsType> = ['name', 'email', 'phone'];

export const Filter: React.FC = () => {

  const {filterField, setFilterField, setFilterValue} = useContext(filterContext);
  const [value, setValue] = useState<string>('');

  const debouncedSetFilterValue = useCallback(debounce(setFilterValue, 1000), []) ;
  
  return (
    <div>
      <input name="search" 
             value={value} 
             onChange={(e) => {
               setValue(e.currentTarget.value)
               debouncedSetFilterValue(e.currentTarget.value);
             }} /> 
      <select value={filterField} onChange={(e) => {
        setFilterField(e.currentTarget.value as UserFieldsType);
        setFilterValue('');
        setValue('');
      }}>
        {userFields.map((field) => 
                       <option value={field} key={field}>{field}</option>
                       )}
      </select> 
    </div>
  )
}
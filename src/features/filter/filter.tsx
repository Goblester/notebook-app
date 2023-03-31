import {useCallback, useState} from "react";
import {UserFieldsType} from "../../types";
import {debounce} from "../../utils/debounce/debounce";
import {useDispatch, useSelector} from "react-redux";
import {getFilterField} from "../../store/filter/selectors";
import {filterActions} from "../../store/filter";


const userFields: Array<UserFieldsType> = ['name', 'email', 'phone'];

export const Filter: React.FC = () => {
    const dispatch = useDispatch();
    const filterField = useSelector(getFilterField);

    const [value, setValue] = useState<string>('');

    const changeFilterValue = (newFilterValue: string) => {
        dispatch(filterActions.changeFilterValue(newFilterValue));
    }

    const changeFilterField = (newFilterField: UserFieldsType) => {
        dispatch(filterActions.changeFilterField(newFilterField));
    }

    const debouncedSetFilterValue = useCallback(debounce(changeFilterValue, 1000), []);

    return (
        <div>
            <input name="search"
                   value={value}
                   onChange={(e) => {
                       setValue(e.currentTarget.value)
                       debouncedSetFilterValue(e.currentTarget.value);
                   }}/>
            <select value={filterField} onChange={(e) => {
                changeFilterField(e.currentTarget.value as UserFieldsType);
                changeFilterValue('');
                setValue('');
            }}>
                {userFields.map((field) =>
                    <option value={field} key={field}>{field}</option>
                )}
            </select>
        </div>
    )
}
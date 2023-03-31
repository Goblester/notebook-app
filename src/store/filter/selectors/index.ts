import {RootState} from "../../store";


export const getFilterValue = (state: RootState) => state.filter.filterValue;
export const getFilterField = (state: RootState) => state.filter.filterField;
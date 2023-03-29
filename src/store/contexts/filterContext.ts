import React from "react";
import { UserFieldsType } from "../../types";

type ContextStateType = {
  filterField: UserFieldsType;
  filterValue: string;
  setFilterValue: (value: string) => void;
  setFilterField: (value: UserFieldsType) => void; 
}

const initialState:ContextStateType = {
  filterField: "name",
  filterValue: '',
  setFilterValue: (value: string) => {},
  setFilterField: (value: UserFieldsType) => {},
};

export const filterContext = React.createContext<ContextStateType>(initialState);
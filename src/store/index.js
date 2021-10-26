import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import initialState from "./states";

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    )
};

export const Context = createContext();
export default Store;

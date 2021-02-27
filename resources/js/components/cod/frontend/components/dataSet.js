import React from 'react'
import { createContext, useContext, useReducer } from "react";
import { Redirect } from 'react-router';

const SetContext = createContext();
export const HeaderData = ({ initialState, reducer, children })=>(
    <SetContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SetContext.Provider>
)
export const useDataSet = () => useContext(SetContext);
export const init = {
    users: []
};
export const reducer = (state, action)=>{
    switch(action.type){
        case "login": 
         return  {
             ...state,
             users: [...state.users, {
                 id: "244",
                 username: "markjoseoh",
                 password: "123456"
             }]
         }
        case "setlocal":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.items
                ]
            }
        case "logout":
            console.log("logout");
            break;
        default: return null;
    } 
}
export const redirectRoute = (auth, component , redirect = '') => {
    return auth.users.length > 0 ? component : <Redirect exact to={redirect}/>
}  
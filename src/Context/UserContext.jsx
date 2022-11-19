import React, { createContext } from 'react'
import { useReducer } from 'react';
import userReducer from './UserReducer';
const UserContext = createContext();

export const UserProvider = ({children}) => {
    const initialstate = {
        users : [],
        user: {},
        userRepos: [],
        isLoading : false
    }
    const [state, dispatch] = useReducer(userReducer,initialstate);

    return <UserContext.Provider value={{
        ...state,
        dispatch,
    }}>
      {children}
    </UserContext.Provider>
}

export default UserContext;
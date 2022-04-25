import { createContext, useReducer  } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

//passing down our state
export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: true
    }

    //destrucutre, get the state and the dispatch which dispatches an action to a user
    const [state, dispatch] = useReducer(githubReducer, initialState)
    

    //clear users - refactored to usersearch component
    // const clearUsers = () => dispatch({
    //   type: 'CLEAR_USERS'
    // })
      
    //set loading creating a function to dispatch the state
    // const setLoading = () => dispatch({ 
    //   type: 'SET_LOADING'
    // })

    
    return <GithubContext.Provider value={{
        //state from the usereducer
        //spreading the state.users/state.repos etc
       ...state,
       dispatch,       
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;
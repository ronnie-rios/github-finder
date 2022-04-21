import { createContext, useReducer  } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    }

    //destrucutre, get the state and the dispatch which dispatches an action to a user
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //testing the api call to get users
    const searchUsers = async (text) => {
      //called from the dispatch on line 36  
      setLoading()
      //setting the params q to the text from the form
      const params = new URLSearchParams({ 
        q: text
      })

      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      })
      //destructure the endpoint obj 
      const { items } = await response.json()
      
      dispatch({
          type: 'GET_USERS',
          //data from the API
          payload: items,
      })
      }
      
      //set loading creating a function to dispatch the state
      const setLoading = () => dispatch({ 
        type: 'SET_LOADING'
      })


    return <GithubContext.Provider value={{
        //state from the usereducer
        users: state.users,
        loading: state.loading,
        searchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;
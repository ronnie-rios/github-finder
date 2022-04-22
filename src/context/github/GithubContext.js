import { createContext, useReducer  } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
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
          //data from the API which is retrieved from the searchUsers func above
          payload: items,
      })
      }

      const getUser = async (login) => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`
          }
        })

        if (response.status ===404) {
          window.location ='/notfound'
        } else {
          //destructure the endpoint obj 
        const data = await response.json()
        
        dispatch({
            type: 'GET_USER',
            //data from the API which is retrieved from the searchUsers func above
            payload: data,
        })
        }
        
        }


    //clear users
    const clearUsers = () => dispatch({
      type: 'CLEAR_USERS'
    })
      
    //set loading creating a function to dispatch the state
    const setLoading = () => dispatch({ 
      type: 'SET_LOADING'
    })

    
    return <GithubContext.Provider value={{
        //state from the usereducer
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;
//state = data, action is a type
const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                //spread the data from the state
                ...state,
                //from the dispatch, get the action.payload set the 'state' to data
                users: action.payload,
                //as if we had the state, set loading to false
                loading: false
            }

        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            //setting the loading state
             return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        //no action returns current state
        default:
            return state
    }
}

export default githubReducer;
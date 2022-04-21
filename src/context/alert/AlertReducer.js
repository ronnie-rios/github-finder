const AlertReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
        case 'REMOEV_ALERT':
            return null
        default:
            return state
    }
}

export default AlertReducer
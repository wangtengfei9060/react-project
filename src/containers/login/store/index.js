const defaultState = {
    loginState: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN_FORM':
            return {
                ...state,
                loginState: true
            }
        default:
            return state
    }
}
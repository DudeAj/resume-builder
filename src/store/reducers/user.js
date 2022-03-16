import * as actionTypes from '../actionTypes';

const initialState = {
    userinfo: [],
    isLoggedIn: false,
    loading: false,
    token: null,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                userinfo: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
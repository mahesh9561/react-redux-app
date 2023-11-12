import {
    getAccUserFullFilled,
    getAccUserRejected,
    getAccUserPending,
    increment,
    decreament,
    increamentByAmount
} from "../Actions";
//Reducer
export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFullFilled:
            return { amount: action.payload, pending: false };
        case getAccUserRejected:
            return { ...state, error: action.error };//error
        case getAccUserPending:
            return { amount: action.payload, pending: false };
        case increment:
            return { amount: state.amount + 1 };
        case decreament:
            return { amount: state.amount - 1 };
        case increamentByAmount:
            return { amount: state.amount + action.payload };
        default:
            return state
    }

}
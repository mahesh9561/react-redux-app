import axios from 'axios'

// Action consts
// const init = "account/init";
export const increment = 'account/increments';
export const decreament = 'account/decreaments';
export const increamentByAmount = 'account/increamentByAmounts';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFullFilled = 'account/getUser/fullfilled';
export const getAccUserRejected = 'account/getUser/rejected';
export const incBonus = 'bonus/increment';

export function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(getAccountUserFullFilled(data.amount))
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
        }
    };
}

export function getAccountUserFullFilled(value) {
    return { type: getAccUserFullFilled, payload: value }
}
export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error }
}
export function getAccountUserPending(value) {
    return { type: getAccUserPending, payload: value }
}
export function increments() {
    return { type: increment }
}
export function decreaments() {
    return { type: decreament };
  }
export function increamentByAmounts(value) {
    return { type: increamentByAmount, payload: value }
}
export function increamentBonus() {
    return { type: incBonus }
}
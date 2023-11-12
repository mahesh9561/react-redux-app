import { increamentByAmount,incBonus } from "../Actions";

export function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case increamentByAmount:
            if (action.payload >= 100){
                return { points: state.points + 1 };
            }
        default:
            return state
    }
}
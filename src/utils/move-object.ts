import { calculateAngle } from './formula';
import {ActionsTypes, InitialStateType} from "../store/game-reducer";

export const moveObjects = (state: InitialStateType, action: ActionsTypes) => {
    if (!action.mousePosition) return state;
    const { x, y } = action.mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...state,
        angle,
    };
}

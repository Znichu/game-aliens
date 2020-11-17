import { calculateAngle } from './formula';
import {InitialStateType} from "../store/game-reducer";
import { v4 as uuidv4 } from 'uuid';

type ActionType = {
    type: "SHOOT_BALL"
    mousePosition: {
        x: number
        y: number
    }
}

export const shoot = (state: InitialStateType, action: ActionType) => {
    if (!state.started) return state;

    const { cannonBalls } = state;

    if (cannonBalls.length === 2) return state;

    const { x, y } = action.mousePosition;

    const angle = calculateAngle(0, 0, x, y);

    const cannonBall = {
        position: { x: 0, y: 0 },
        angle,
        id: uuidv4(),
    };

    return {
        ...state,
        cannonBalls: [...state.cannonBalls, cannonBall]
    }
}

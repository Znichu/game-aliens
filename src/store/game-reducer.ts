import {InferActionTypes} from "./store";
import {moveObjects} from "../utils/move-object";
import {CannonBallType, FlyingObjectType} from "../utils/types";
import {shoot} from "../utils/shoot";

let initialState = {
    angle: 45,
    started: false,
    kills: 0,
    lives: 5,
    flyingObjects: [] as FlyingObjectType[],
    lastObjectCreatedAt: new Date(),
    cannonBalls: [] as CannonBallType[]
};

//Reducer
export const GameReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "MOVE_OBJECT": {
          return moveObjects(state, action)
        }
        case "RUN_GAME": {
            return {
                ...state,
                started: true,
                kills: 0
            }
        }
        case "SHOOT_BALL": {
            return shoot(state, action)
        }
        default:
            return state;
    }
};

//Actions
export const actions = {
    moveObject: (mousePosition: { x: number; y: number }) => ({ type: "MOVE_OBJECT", mousePosition} as const),
    runGame: () => ({type: "RUN_GAME"} as const),
    shooBall: (mousePosition: { x: number; y: number }) => ({type: "SHOOT_BALL", mousePosition} as const)
};


//Types
export type InitialStateType = typeof initialState;
export type ActionsTypes = InferActionTypes<typeof actions>;
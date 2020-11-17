import {InferActionTypes} from "./store";
import {moveObjects} from "../utils/move-object";
import {FlyingObjectsType} from "../utils/types";

let initialState = {
    angle: 45,
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [] as FlyingObjectsType[],
    lastObjectCreatedAt: new Date(),
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
                started: true
            }
        }
        default:
            return state;
    }
};

//Actions
export const actions = {
    moveObject: (mousePosition: { x: number; y: number }) => ({ type: "MOVE_OBJECT", mousePosition} as const),
    runGame: () => ({type: "RUN_GAME"} as const)
};


//Types
export type InitialStateType = typeof initialState;
export type ActionsTypes = InferActionTypes<typeof actions>;
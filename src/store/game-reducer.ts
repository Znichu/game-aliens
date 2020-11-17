import {InferActionTypes} from "./store";
import {moveObjects} from "../utils/move-object";

let initialState = {
    angle: 45
};

//Reducer
export const GameReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "MOVE_OBJECT": {
          return moveObjects(state, action)
        }
        default:
            return state;
    }
};

//Actions
export const actions = {
    moveObject: (mousePosition: { x: number; y: number }) => ({ type: "MOVE_OBJECT", mousePosition} as const),
};


//Types
export type InitialStateType = typeof initialState;
export type ActionsTypes = InferActionTypes<typeof actions>;
import {calculateAngle} from './formula';
import {InitialStateType} from "../store/game-reducer";
import {createFlyingObject} from "./create-flying-objects";

export const moveObjects = (state: InitialStateType, action: any) => {
    const mousePosition = action.mousePosition || {
        x: 0,
        y: 0
    };

    const newState = createFlyingObject(state);

    const now= (new Date()).getTime();
    const newFlyingObjects = newState.flyingObjects.filter(obj => (
        (now - obj.createdAt) < 4000
    ));

    const {x, y} = mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...newState,
        flyingObjects: newFlyingObjects,
        angle,

    };
}

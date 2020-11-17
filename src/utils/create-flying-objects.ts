import {
    createInterval,
    flyingObjectsStarterYAxis,
    maxFlyingObjects,
    flyingObjectsStarterPositions
} from './constant';
import {InitialStateType} from "../store/game-reducer";

export const createFlyingObject = (state: InitialStateType) => {
    if (!state.started) return state; // игра не запущена

    const now = (new Date()).getTime();
    const {lastObjectCreatedAt, flyingObjects} = state;
    const createNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval &&
        flyingObjects.length < maxFlyingObjects
    );

    if (!createNewObject) return state; // нет нужды создавать новые объекты в данный момент

    const id = (new Date()).getTime();
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id,
    };

    return {
        ...state,
        flyingObjects: [
            ...state.flyingObjects,
            newFlyingObject
        ],
        lastObjectCreatedAt: new Date(),
    }
}

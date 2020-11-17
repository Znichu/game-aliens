import {
    createInterval,
    flyingObjectsStarterYAxis,
    maxFlyingObjects,
    flyingObjectsStarterPositions
} from './constant';
import {InitialStateType} from "../store/game-reducer";
import { v4 as uuidv4 } from 'uuid';

export const createFlyingObject = (state: InitialStateType) => {
    if (!state.started) return state; // игра не запущена

    const now = (new Date()).getTime();
    const {lastObjectCreatedAt, flyingObjects} = state;
    const createNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval &&
        flyingObjects.length < maxFlyingObjects
    );

    if (!createNewObject) return state; // нет нужды создавать новые объекты в данный момент

    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: (new Date()).getTime(),
        id: uuidv4(),
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

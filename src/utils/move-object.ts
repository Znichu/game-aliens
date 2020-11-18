import {calculateAngle} from './formula';
import {InitialStateType} from "../store/game-reducer";
import {createFlyingObject} from "./create-flying-objects";
import {moveBalls} from "./move-cannon-ball";
import {checkCollisions} from "./check-collisions";

export const moveObjects = (state: InitialStateType, action: any) => {
    if (!state.started) return state;
    let cannonBalls = moveBalls(state.cannonBalls);

    const mousePosition = action.mousePosition || {
        x: 0,
        y: 0
    };

    const newState = createFlyingObject(state);
    const now= (new Date()).getTime();

    let flyingObjects = newState.flyingObjects.filter(object => (
        (now - object.createdAt) < 4000
    ));

    const lostLife = state.flyingObjects.length > flyingObjects.length;
    let lives = state.lives;
    if (lostLife) {
        lives--;
    }

    const started = lives > 0;
    if (!started) {
        flyingObjects = [];
        cannonBalls = [];
        lives = 5;
    }

    const {x, y} = mousePosition;
    const angle = calculateAngle(0, 0, x, y);

    const objectsDestroyed = checkCollisions(cannonBalls, flyingObjects);
    const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
    const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

    cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
    flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

    const kills = state.kills + flyingDiscsDestroyed.length;

    return {
        ...newState,
        flyingObjects,
        cannonBalls,
        angle,
        lives,
        kills,
        started,
    };
}

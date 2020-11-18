import React from 'react';
import {Sky} from "./sky";
import {Ground} from "./ground";
import {CannonPipe} from "./cannon-pipe";
import {CannonBase} from "./cannon-base";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {CannonBall} from "./cannon-ball";
import {gameHeight} from "../utils/constant";
import {CurrentScore} from "./current-score";
import {FlyingObject} from "./flying-object";
import {Heart} from "./heart";
import {StartGame} from "./start-game";
import {actions} from "../store/game-reducer";

type PropsType = {
    trackMouse: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    shootBall: () => void
}


export const Canvas: React.FC<PropsType> = ({trackMouse, shootBall}) => {
    const dispatch = useDispatch();

    const {
        angle: rotation,
        started,
        flyingObjects,
        cannonBalls,
        lives,
        kills
    }= useSelector((state: RootState) => state.game)

    const viewBox = [window.innerWidth / -2, 100 -gameHeight, window.innerWidth, gameHeight].join();

    const startGame = () => {
        dispatch(actions.runGame())
    }
    const liveItems = [];
    for (let i = 0; i < lives; i++) {
        const heartPosition = {
            x: -180 - (i * 70),
            y: 55
        };
        liveItems.push(<Heart key={i} position={heartPosition}/>);
    }

    return (
        <svg
            id="aliens-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
            onMouseMove={(event) => trackMouse(event)}
            onClick={shootBall}

        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2"/>
                </filter>
            </defs>

            <Sky/>
            <Ground/>
            {cannonBalls.map(ball =><CannonBall key={ball.id} position={ball.position}/>)}
            <CannonPipe rotation={rotation}/>
            <CannonBase/>
            <CurrentScore score={kills}/>
            {!started && <StartGame startGame={startGame}/>}
            {liveItems}
            {flyingObjects.map(obj => <FlyingObject key={obj.id} position={obj.position}/>)}
        </svg>
    );
};

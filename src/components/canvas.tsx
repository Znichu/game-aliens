import React from 'react';
import {Sky} from "./sky";
import {Ground} from "./ground";
import {CannonPipe} from "./cannon-pipe";
import {CannonBase} from "./cannon-base";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {CannonBall} from "./cannon-ball";
import {positionBall} from "../utils/constant";

type PropsType = {
    trackMouse: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}


export const Canvas: React.FC<PropsType> = ({trackMouse}) => {

    const rotation = useSelector((state: RootState) => state.game.angle)

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight].join();

    return (
        <svg
            id="aliens-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
            onMouseMove={(event) => trackMouse(event)}

        >
            <Sky />
            <Ground />
            <CannonPipe rotation={rotation} />
            <CannonBase />
            <CannonBall position={positionBall}/>
        </svg>
    );
};

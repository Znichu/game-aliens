import React from 'react';
import {skyAndGroundWidth} from "../utils/constant";

export const Sky = () => {

    const skyStyle = {
        fill: '#30abef',
    };
    const skyWidth = skyAndGroundWidth;
    const gameHeight = 1200;

    return (
        <>
            <g id="Sun" data-name="Sun">
                <circle className="cls-2" cx="385" cy="335.7" r="315.74"/>
                <circle className="cls-3" cx="385" cy="335.7" r="180.56"/>
            </g>
        <rect
            style={skyStyle}
            x={skyWidth / -2}
            y={100 - gameHeight}
            width={skyWidth}
            height={gameHeight}
        />
</>
    );
};

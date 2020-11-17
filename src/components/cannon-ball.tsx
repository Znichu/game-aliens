import React from 'react';
import {ObjectPositionType} from "../utils/types";

type PropsType = {
    position: ObjectPositionType
}

export const CannonBall: React.FC<PropsType> = ({position}) => {

    const ballStyle = {
        fill: '#777',
        stroke: '#444',
        strokeWidth: '2px',
    };

    return (
        <ellipse
            style={ballStyle}
            cx={position.x}
            cy={position.y}
            rx="16"
            ry="16"
        />
    );
};

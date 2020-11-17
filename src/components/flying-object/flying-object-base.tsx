import React from 'react';
import {ObjectPositionType} from "../../utils/types";

type PropsType = {
    position: ObjectPositionType
}

export const FlyingObjectBase: React.FC<PropsType> = ({position}) => {

    const style = {
        fill: '#979797',
        stroke: '#5c5c5c',
    };

    return (
        <ellipse
            cx={position.x}
            cy={position.y}
            rx="40"
            ry="10"
            style={style}
        />
    );
};
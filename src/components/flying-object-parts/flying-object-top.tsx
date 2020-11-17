import React from 'react';
import {ObjectPositionType} from "../../utils/types";
import {pathFromBezierCurve} from "../../utils/formula";

type PropsType = {
    position: ObjectPositionType
}

export const FlyingObjectTop: React.FC<PropsType> = ({position}) => {

    const style = {
        fill: '#b6b6b6',
        stroke: '#7d7d7d',
    };

    const baseWith = 40;
    const halfBase = 20;
    const height = 25;

    const cubicBezierCurve = {
        initialAxis: {
            x: position.x - halfBase,
            y: position.y,
        },
        initialControlPoint: {
            x: 10,
            y: -height,
        },
        endingControlPoint: {
            x: 30,
            y: -height,
        },
        endingAxis: {
            x: baseWith,
            y: 0,
        },
    };

    return (
        <path
            style={style}
            d={pathFromBezierCurve(cubicBezierCurve)}
        />
    );
};
import React from 'react';
import {ObjectPositionType} from "../utils/types";
import {pathFromBezierCurve} from "../utils/formula";

type PropsType = {
    position: ObjectPositionType
}

export const Heart: React.FC<PropsType> = ({position}) => {

    const heartStyle = {
        fill: '#FE0128',
        stroke: '#000',
        strokeWidth: '1px',
    };

    const leftSide = {
        initialAxis: {
            x: position.x,
            y: position.y,
        },
        initialControlPoint: {
            x: -20,
            y: -20,
        },
        endingControlPoint: {
            x: -35,
            y: 10,
        },
        endingAxis: {
            x: 0,
            y: 30,
        },
    };

    const rightSide = {
        initialAxis: {
            x: position.x,
            y: position.y,
        },
        initialControlPoint: {
            x: 20,
            y: -20,
        },
        endingControlPoint: {
            x: 35,
            y: 10,
        },
        endingAxis: {
            x: 0,
            y: 30,
        },
    };

    return (
        <g filter="url(#shadow)">
            <path
                style={heartStyle}
                d={pathFromBezierCurve(leftSide)}
            />
            <path
                style={heartStyle}
                d={pathFromBezierCurve(rightSide)}
            />
        </g>
    );
};

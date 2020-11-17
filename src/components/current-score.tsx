import React from 'react';

type PropsType = {
    score: number
}

export const CurrentScore: React.FC<PropsType> = ({score}) => {

    const scoreStyle = {
        fontSize: 65,
        fill: '#ff0',
    };
    const textStyle = {
        fontSize: 55,
        fill: '#fff'
    }

    return (
        <g filter="url(#shadow)">
            <text style={textStyle} x="300" y="80">
                score:
            </text>
            <text style={scoreStyle} x="500" y="80">
                 {score}
            </text>
        </g>
    );
};

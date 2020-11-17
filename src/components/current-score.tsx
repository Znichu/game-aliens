import React from 'react';

type PropsType = {
    score: number
}

export const CurrentScore: React.FC<PropsType> = ({score}) => {

    const scoreStyle = {
        fontSize: 65,
        fill: '#B00D23',
    };

    return (
        <g filter="url(#shadow)">
            <text style={scoreStyle} x="300" y="80">
                score: {score}
            </text>
        </g>
    );
};

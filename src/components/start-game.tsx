import React from 'react';
import {gameWidth} from "../utils/constant";

type PropsType = {
    startGame: () => void
}

export const StartGame: React.FC<PropsType> = ({startGame}) => {

    const button = {
        x: gameWidth / -2, // половина ширины
        y: -280, // минус значит "над" (выше нуля)
        width: gameWidth,
        height: 200,
        rx: 10, // border радиус
        ry: 10, // border радиус
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: startGame,
    };

    const text = {
        textAnchor: 'middle', // центр
        x: 0, // центр относительно оси X
        y: -150, // 150 выше нуля (по оси Y)
        style: {
            fontSize: 60,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: startGame,
    };

    return (
        <g filter="url(#shadow)">
            <rect {...button} />
            <text {...text}>
                Tap To Start!
            </text>
        </g>
    );
};

import React, {useEffect} from 'react';
import {Canvas} from "./components/canvas";
import {useDispatch} from "react-redux";
import {actions} from "./store/game-reducer";
import {getCanvasPosition} from "./utils/formula";



export const Game = () => {

    let canvasMousePosition: { x: number; y: number };

    const dispatch = useDispatch()

    useEffect(() => {
        const intervalID = setInterval(() => {
            dispatch(actions.moveObject(canvasMousePosition));
        }, 10);

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    const trackMouse = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        canvasMousePosition = getCanvasPosition(event);
    }

    return (
        <Canvas trackMouse={trackMouse}/>
    );
}


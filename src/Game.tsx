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

    useEffect(() => {
        window.onresize = () => {
            const cnv: any = document.getElementById('aliens-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        // @ts-ignore
        window.onresize();
    })

    const trackMouse = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        canvasMousePosition = getCanvasPosition(event);
    }

    const shootBall = () => {
        dispatch(actions.shooBall(canvasMousePosition))
    }

    return (
        <Canvas trackMouse={trackMouse} shootBall={shootBall}/>
    );
}


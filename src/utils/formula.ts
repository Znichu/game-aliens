import {CubicBezierCurveType} from "./types";

export const pathFromBezierCurve = (cubicBezierCurve: CubicBezierCurveType) => {
    const {
        initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const radiansToDegrees = (radians: number) => ((radians * 180) / Math.PI);

export const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
    if (x2 >= 0 && y2 >= 0) {
        return 90;
    } else if (x2 < 0 && y2 >= 0) {
        return -90;
    }

    const dividend = x2 - x1;
    const divisor = y2 - y1;
    const quotient = dividend / divisor;
    return radiansToDegrees(Math.atan(quotient)) * -1;
};

export const getCanvasPosition = (event: any) => {

    const svg = document.getElementById('aliens-canvas');
    // @ts-ignore
    const point = svg?.createSVGPoint();

    point.x = event.clientX;
    point.y = event.clientY;
    // @ts-ignore
    const { x, y } = point.matrixTransform(svg?.getScreenCTM().inverse());
    return {x, y};
};
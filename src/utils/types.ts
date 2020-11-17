export type ObjectPositionType = {
    x: number | string | any
    y: number | string
}

export type CubicBezierCurveType = {
    initialAxis: ObjectPositionType
    initialControlPoint: ObjectPositionType
    endingControlPoint: ObjectPositionType
    endingAxis: ObjectPositionType
}
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

export type FlyingObjectType = {
    position: ObjectPositionType
    createdAt: number
    id: string
}

export type CannonBallType = {
    position: ObjectPositionType
    angle: number
    id: string
}
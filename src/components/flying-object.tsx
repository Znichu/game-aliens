import React from 'react';
import {FlyingObjectBase} from "./flying-object/flying-object-base";
import {ObjectPositionType} from "../utils/types";
import {FlyingObjectTop} from "./flying-object/flying-object-top";

type PropsType = {
    position: ObjectPositionType
}

export const FlyingObject: React.FC<PropsType> = ({position}) => {
    return (
        <g>
            <FlyingObjectBase position={position}/>
            <FlyingObjectTop position={position}/>
        </g>
    );
};

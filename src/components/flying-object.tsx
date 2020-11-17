import React from 'react';
import {FlyingObjectBase} from "./flying-object-parts/flying-object-base";
import {ObjectPositionType} from "../utils/types";
import {FlyingObjectTop} from "./flying-object-parts/flying-object-top";
import styled, { keyframes } from 'styled-components';
import { gameHeight } from '../utils/constant';


type PropsType = {
    position: ObjectPositionType
}

export const FlyingObject: React.FC<PropsType> = ({position}) => {
    return (
        <Move>
            <FlyingObjectBase position={position}/>
            <FlyingObjectTop position={position}/>
        </Move>
    );
};


const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;
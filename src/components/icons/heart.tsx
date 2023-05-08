import React from "react";
//@ts-ignore
import {ReactComponent as Heart} from './../../assests/heartIcon.svg';
//@ts-ignore
import {ReactComponent as FilledHeart} from './../../assests/filledHeartIcon.svg';

type PropsType = {
    isFilled?: boolean;
};

export const HeartIcon: React.FC<PropsType> = ({isFilled}) => {

    return isFilled ?
        <FilledHeart/> :
        <Heart/>;
}
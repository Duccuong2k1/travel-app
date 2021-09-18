import React from 'react';
import './Button.scss';
interface IPropsButton{
    name: string;
}

export const Button:React.FC<IPropsButton> = ({name}) => {
    return (
        <div className="button">
            <button type="submit" onClick={(e)=>{}} className={'btn-button'}>{name}</button>
        </div>
    )
}
export const ButtonSreach:React.FC<IPropsButton> = ({name}) => {
    return (
        <div className="button">
            <button type="submit" onClick={(e)=>{}} className={'btn-button__search'}>{name}</button>
        </div>
    )
}

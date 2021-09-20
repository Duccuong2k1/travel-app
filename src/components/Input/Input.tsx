import React from 'react'
import './Input.scss';

interface IPropsInput{
    name: string
    type: string;
    placeholder: string;
    id: string;
    // onChange:()=>void;
}

export const Input:React.FC<IPropsInput> = ({type,placeholder,id,name}) => {
    return (
        <>
            <label htmlFor={id}>{name}</label>
            <input className="input-control" type={type} id={id} placeholder={placeholder} onChange={(e)=> e.target.value}/>   
        </>
    )
}

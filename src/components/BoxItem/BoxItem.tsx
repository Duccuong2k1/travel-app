import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './BoxItem.scss';

interface IPropsBoxItem{
    name: string;
    img: string;
    price:number;
    day:string;

}
export const BoxItem:React.FC<IPropsBoxItem> = ({img,name,price,day}) => {
    return (
        <div className="box-item__tour">
            <div className="box-item__tour-img">
                <img src={img} alt={name} />
                <div className="price">
                    <span>$ {price}</span>
                </div>
            </div>
            <div className="box-item__tour-content">
                <div className="box-item__tour-info">
                    <h3>{name}</h3>
                    <span>{day}</span>
                </div>
                <Link to={`/Tours/`}>
                    <Button name="Book now" />
                </Link>
               
            </div>
        </div>
    )
}

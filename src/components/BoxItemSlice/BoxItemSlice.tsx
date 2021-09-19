import React from 'react';
import './BoxItemSlice.scss';
import { RiMapPinFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
interface IProps{
    name:string;
    price: number;
    img: string;
    place: string;
    id:number;
    rating: number;
    day:string;
}
export const BoxItemSlice:React.FC<IProps> = ({name,price,img,place,id,rating,day}) => {
    return (
        <Link to={`/Tours/${id}`} className="box-item-slice">
            <div className="box-item-slice__header">
                <img src={img} alt="" />
            </div>
            <div className="box-item-slice__body">
                <p className="icon-place"><span><RiMapPinFill /></span>{place}</p>
                <h3>{name}</h3>
                <p>{day}</p>
                <div className="booking">
                    <p className="price">{price}$</p>
                    <p className="rating"><AiFillStar className="icon-star"/><span>{rating}</span></p>
                </div>
            </div>
        </Link>
    )
}

import React from 'react';
import './CardSlice.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BoxItemSlice } from '../../../../components';
interface ICardSlice{
    dataTours:any
}
export const CardSlice:React.FC<ICardSlice> = ({dataTours}) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <div className="card-slice">
            <div className="card-slice__header">
                <div className="card-slice__header-title">
                    <h3>perfect holiday plan</h3>
                    <p>if you contact most of the travel asserting to help you plan your vacation they would offers holiday packages in group</p>
                </div>
            </div>
            <div className="card-slice__body">

                <Slider {...settings}>
                    {
                        dataTours.map((item:any, index:number) => {
                            return(
                                <div key={index}>
                                    <BoxItemSlice 
                                    name={item.name} 
                                    id={item.id} 
                                    img={item.img}
                                    price={item.price}
                                    day={item.day}
                                    rating={item.rating}
                                    place={item.place}
                                    />
                                </div>
                            )
                        })
                    }
                   
                    
                </Slider>
            </div>
        </div>
    )
}

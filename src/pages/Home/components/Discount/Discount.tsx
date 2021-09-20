import React from 'react';
import { Link } from 'react-router-dom';
import { BoxItem, Button } from '../../../../components';
import './Discount.scss';
const dataDiscount = [
    {
        name:"Japan",
        img:"https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price:450,
        day:"6 day 6 night"
    },
    {
        name:"Italy",
        img:"https://images.unsplash.com/photo-1566463584131-7194f1a7945e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        price:239,
        day:"3 day 4 night"
    },
    {
        name:"Canada",
        img:"https://images.unsplash.com/photo-1614844848029-058f34a0508b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price:530,
        day:"7 day 6 night"
    },
    {
        name:"Sapa",
        img:"https://images.unsplash.com/photo-1622589222105-3e8af12b48ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        price:150,
        day:"5 day 4 night"
    },
]
export const Discount = () => {
    return (
        <div className="discounts">
            <div className="discounts-header">

                <h2>Special offers & Discounts</h2>
                <p>Travel by water often provides more commfort and speed than land travel.</p>
            </div>
            <div className="discounts-body">
                {
                    dataDiscount.map((item, index) => {
                        return(
                            <BoxItem 
                            key={index}
                            name={item.name} 
                            img={item.img}
                            price={item.price}
                            day={item.day}
                            />
                        )
                    })
                }
                
            </div>
            <Link to={`/Tours`} className="see-more">
                <Button name="See More"/>
            </Link>
        </div>
    )
}

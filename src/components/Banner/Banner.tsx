import React from 'react'
import { Button } from '../Button/Button';
import './Banner.scss';
const imgAdsBox = [
    {
        title:"Cham QP",
        img:"https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
        title:"Hasam AT",
        img:"https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
    },
    {
        title:"Japan PA",
        img:"https://images.unsplash.com/photo-1631544114468-111d572b2a84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
]
export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>tour your dream destination with tourve.</h1>
                <p>plan and book your Tarbo Travel Landing page design consists of many sections such as how. It can be customized in a very easy way from US. </p>
                <Button name="Discover Now">Discover Now</Button>
                
            </div>
            <div className="banner__imgads">
                <div className="banner__imgads-ads-1">
                    <img className="ads-1" src="https://hthaostudio.com/wp-content/uploads/2019/08/VALI-3-min.jpg" alt="" />
                    <div className="box">
                        <div className="box-header">
                            <img src="https://images.unsplash.com/photo-1625400743641-f431347db9b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                            <span>...</span>
                        </div>
                        <div className="box-body">
                            {imgAdsBox.map((item,index) => (
                                <div className="box-body__item" key={index}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>book</p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="banner__imgads-ads-2">
                    <img className="ads-2" src="https://hthaostudio.com/wp-content/uploads/2019/08/VALI-2-min.jpg" alt="" />
                </div>
                
            </div>
        </div>
    )
}

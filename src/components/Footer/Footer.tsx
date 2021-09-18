import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Footer.scss";

const contactFooter =[
    {
        nameHeader:"Company",
        listContact:["About us","company","Press & blog","Privacy Policy"]
    },
    {
        nameHeader:"Service",
        listContact:["How it works","Our Blog","Our Service","Contact Us"]
    },
    {
        nameHeader:"Quick Link",
        listContact:["Press Cente","Travel new","About Us","Privacy Policy"]
    }
]

export const Footer = () => {
    return (
        <>

        <div className="footer">
            <div className="footer-contact">
                <div className="footer-contact__header">
                    <SiGooglemaps className="icon-logo"/>
                    <span className="name-logo">Trabo</span>
                </div>
                <div className="footer-contact__body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, placeat.</p>
                </div>
            </div>
            {
                contactFooter.map((item, index)=>(
                    <div className="footer-contact" key={index}>
                        <div className="footer-contact__header">
                            <h3>{item.nameHeader}</h3>
                        </div>
                        <div className="footer-contact__body">
                            <ul>
                                {
                                    item.listContact.map((contact,index) => {
                                        return(
                                            <li key={index}>
                                                <Link to="/">{contact}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="copyright">
            <div>
                <p>duc cuong 2021 All rights reserved.</p>
            </div>
            <div>
                <span>Term of service</span>
                <span>Privacy Policy</span>
            </div>
        </div>
        </>

    )
}

import React from 'react';
import './Header.scss'
import { SiGooglemaps } from "react-icons/si";
import { Link } from 'react-router-dom';

const MenuNav = [
    {
        display_name: "Home",
        route: "/",
    },
    {
        display_name: "About",
        route: "/About",
    },
    {
        display_name: "Destinations",
        route: "/Destinations",
    },
    {
        display_name: "Tours",
        route: "/Tours",
    },
    {
        display_name: "Blog",
        route: "/Blog",
    },
    {
        display_name: "Contact Us",
        route: "/ContactUs",
    },
]


export const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <Link to="/" className="header-nav__logo">
                    <SiGooglemaps className="icon-logo"/>
                    <span className="name-logo">Trabo</span>
                </Link>
              
                <ul className="header-nav__menu">
                    {MenuNav.map((item, index) => {
                        const {display_name, route } = item;
                        return (
                        <Link to={route} key={index}>
                            <li className="header__item">
                                <div className="header__item-inner">
                                    <span>{display_name}</span>
                                </div>
                            </li>
                        </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}



import React from 'react';
import './HowWorking.scss';
import { FcAcceptDatabase,FcBriefcase,FcFilledFilter } from "react-icons/fc";

export const HowWorking = () => {
    return (
        <div className="how-works">
            <div className="how-works__box">
                <h3>How it Works</h3>
                <p>Apply here for a monthly subscription to globally. which is issues once amount</p>
            </div>
            <div className="how-works__box">
                <span><FcAcceptDatabase className="icon"/></span>
                <h4>sign in</h4>
                <p>Employees set their per paycheck contribition</p> 
            </div>
            <div className="how-works__box">
                <span><FcFilledFilter className="icon"/></span>
                <h4>contribute</h4>
                <p>Employees mae a matching contribution</p>
            </div>
            <div className="how-works__box">
                <span><FcBriefcase className="icon"/></span>
                <h4>travel</h4>
                <p>Employees book their travel & vacation with their taab card</p>
            </div>
        </div>
    )
}

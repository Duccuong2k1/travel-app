import React from 'react';
import './Customer.scss';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const Customer = () => {
    return (
        <div className="customer">
            <div className="customer__header">
                <h3>What our Customer say about us</h3>
            </div>
            <div className="customer__body">
                <div className="customer__wrapper">
                    <div className="box1">
                        <p>this a very belated note (for which apologies ) to thank you for the very outstanding services you provides to my daughter and to me during our trip to copper canyou in september.</p>
                        <div className="customer-item">
                            <img src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                            <div>
                                <h4>patrick mills</h4>
                                <span>register client</span>
                            </div>
                        </div>
                    </div>
                    <div className="box2">
                    <p>it is very nice and quality service i recommend it.</p>
                        <div className="customer-item">
                            <img src="https://images.unsplash.com/photo-1611006328160-064054b4e718?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                            <div>
                                <h4>paul johnston</h4>
                                <span>register client</span>
                            </div>
                        </div>
                    </div>
                    <div className="box3">
                    <p>this a very belated note (for which apologies ) to thank you for the very outstanding services you provides to my daughter and to me during our trip to copper canyou in september.</p>
                        <div className="customer-item">
                            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
                            <div>
                                <h4>jon hason</h4>
                                <span>register client</span>
                            </div>
                        </div>
                    </div>
                    <div className="box4">
                    <p>i love to caption you provides to my daughter and to me during our trip to copper canyou in september.this a very belated note (for which apologies ) to thank you for the very outstanding services you provides to my daughter and to me during our trip to copper canyou in september</p>
                        <div className="customer-item">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                            <div>
                                <h4>patrick mills</h4>
                                <span>register client</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer__btn">
                    <button className="btn-prev"><GrFormPrevious className="btn-icon"/></button>
                    <button className="btn-next"><GrFormNext className="btn-icon"/></button>
                </div>
            </div>
        </div>
    )
}

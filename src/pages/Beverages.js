import React from 'react'
import anchor from '../images/anchor.svg';

export default function Beverages() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">BEVERAGES: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Beverages:</h1>
                    <p className="content-text">Yourdrop brings you a full stock of all your beverages need, whatever you are looking for you will find it getting served at your doorstep.</p>
                    <p className="content-text">Our vast collection of quality beverages are ready to serve you with best of delivery service offered by Yourdrop</p>
                    <p className="content-text">Our deliveries are taken care of total hygiene and safety of our customers as we provide you with a contactless experience right from order booking to payments and delivery.</p>
                    <p className="content-text">Offering you with the best - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

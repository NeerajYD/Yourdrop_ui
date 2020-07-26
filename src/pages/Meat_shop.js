import React from 'react'
import anchor from '../images/anchor.svg';

export default function Meat_shop() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">MEAT SHOP: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Meat Shop:</h1>
                    <p className="content-text">Get the finest quality of meat that is fresh and will give you the perfect tasteful delight. Yourdrop covers all your requirement for meat and get you delivered with the best of quality.</p>
                    <p className="content-text">We do take care of proper hygiene in serving you for your requirements and provide you with a contactless delivery experience along with safety of your order.</p>
                    <p className="content-text">Get your order delivered - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

import React from 'react'
import anchor from '../images/anchor.svg';

export default function Baby_care() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">BABY CARE: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Baby care:</h1>
                    <p className="content-text">Welcome your newborn child with a smile and get delivery of all his pampering needs. Yourdrop brings you a large collection of baby care essentials that are kept to provide your child with extra care and help them get nourished with quality products. Our range offers you with a number of baby skin and body care essentials.</p>
                    <p className="content-text">We do care about your child’s and your health and all your orders are well sanitised and offer you with maximum safety and providing you with a contactless delivery experience.</p>
                    <p className="content-text">Get the delivery at your doorstep - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

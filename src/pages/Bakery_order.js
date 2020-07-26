import React from 'react'
import anchor from '../images/anchor.svg';

export default function Bakery_order() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">BAKERY</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Bakery</h1>
                    <p className="content-text">Yourdrop brings you the finest of bakers in the town serving you with their premium delicacies and having you take on a tasteful delight. Be it a house party, a joyful celebration or to cheer up your mood. Get the best from a vast variety of bakery and deli products at your doorstep.</p>
                    <p className="content-text">The products that we serve you with are prepared while keeping proper hygiene and safety in mind also we offer you with contactless delivery and payments for your orders.</p>
                    <p className="content-text">Your order is ready to serve - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

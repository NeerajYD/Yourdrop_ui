import React from 'react'
import anchor from '../images/anchor.svg';

export default function Fruits_vegetables() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">Fruits and Vegetables: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Fruits and Vegetables:</h1>
                    <p className="content-text">Get your kitchen filled with the freshness of fruits of vegetables and give your family a healthy nutritional diet. Yourdrop is covering your daily requirements for fruits and vegetables in serving you with the best of quality.</p>
                    <p className="content-text">Now everyday you can place your order of fresh veggies and fruits and get them delivered at your doorstep.</p>
                    <p className="content-text">We take care of the hygiene and safety of the product that you order and give you a fully contactless delivery experience as we prioritise your safety.</p>
                    <p className="content-text">Order your pack of quality fruits and vegetables - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

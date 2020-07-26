import React from 'react'
import anchor from '../images/anchor.svg';

export default function Personal_care() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">PERSONAL CARE: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Personal Care:</h1>
                    <p className="content-text">Get your requirements of personal care products be taken care by Yourdrop where you can place your order of personal care products and get them delivered at your doorstep.</p>
                    <p className="content-text">The products that we serve you with are of best quality and we have a vast range to offer form.</p>
                    <p className="content-text">We are offering our services and products as we take care of the hygiene and safety of our customers. We bring your orders with a through contactless delivery experience.</p>
                    <p className="content-text">Get you essentials delivered now - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

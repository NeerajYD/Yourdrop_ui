import React from 'react'
import anchor from '../images/anchor.svg';

export default function Household_care() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">HOUSEHOLD CARE: </a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Household Care:</h1>
                    <p className="content-text">ourdrop covers all your needs regarding household care, we bring you with the quality products that you require to make your house a brighter place to stay and enjoy.</p>
                    <p className="content-text">Order from a variety of household products range offered you at great price.</p>
                    <p className="content-text">Every order that you place is taken care of your personal safety as it reaches your doorstep with a foolproof contactless delivery experience.</p>
                    <p className="content-text">Place your order - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

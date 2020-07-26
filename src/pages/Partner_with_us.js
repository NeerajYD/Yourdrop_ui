import React from 'react'
import anchor from '../images/anchor.svg';

export default function Partner_with_us() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">PARTNER WITH US:</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Partner with us</h1>
                    <p className="content-text">Yourdrop is providing its platform for delivery partners to join our service and helping them be our backbone in providing services to the customers and also providing them with higher earnings.</p>
                    <p className="content-text">We welcome delivery partners to join our network and march on towards a more eventful and successful path for their professional as well as personal welfare.</p>
                    <p className="content-text">If you are a hardworking self and want to smell the taste of success, then reach us at - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

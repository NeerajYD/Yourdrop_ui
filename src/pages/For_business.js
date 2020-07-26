import React from 'react'
import anchor from '../images/anchor.svg';

export default function For_business() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">FOR BUSINESS:</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">For Business</h1>
                    <p className="content-text">Yourdrop brings you a great opportunity to expand your business into the online domain. Our association will provide you with multiple benefits and will enhance not just your potential to serve the customer with our services but will also scale up your business growth in terms with customer engagement and revenue generation.</p>
                    <p className="content-text">We value our association and will always serve this partnership with our trusted and continuous support that will help your business succeed.</p>
                    <p className="content-text">To know more and get along with our association, reach us at - (<a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">call to action</a>)</p>
                </div>
            </div>
    )
}

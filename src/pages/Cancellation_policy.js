import React from 'react'
import anchor from '../images/anchor.svg';

export default function Cancellation_policy() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">CANCELLATION POLICY</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Yourdrop cancellation of order and refunds transfer</h1>
                    <p className="content-text">
                    </p><ul>
                        <li>Failure to accept the order within 12 hours.</li>
                        <li> The retailer needs to enter the dispatch days that he would take to ship out a product while creating his listing on the App. Failure to dispatch the order within the maximum dispatch date mentioned in the product listing.</li>
                        <li>Unsuccessful attempts to accept the order from the retailer</li>
                        <li>Unsuccessful attempt from the buyer to take the delivery of the approved order.</li>
                        <li>Cancellation of order by the buyer before delivery.</li>
                        <li>If a buyer cancels a complete order then, as per our policies the delivery charge shall not get refunded post the products verification for cancellation.</li>
                        <li>Post order cancellation money shall be refunded within 48 hours.</li>
                        <li>After the order has been picked from store, a cancellation charge of rs 30 will be charged if cancelled by customer.</li>
                        <li>Customer cannot produce claims on yourdrop for losses resulting from delay or any other unforeseeable circumstances</li>
                        
                    </ul>
                    <p></p>
                </div>
            </div>
    )
}

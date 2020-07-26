import React from 'react'
import anchor from '../images/anchor.svg';

export default function Faq() {
    return (
        <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">How can I place my order on Yourdrop?</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term2" className="title">Can we order on Yourdrop all daily needs products?</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term3" className="title">Is COD available on Yourdrop?</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term4" className="title">How can I partner my Shop with Yourdrop?</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term5" className="title">How can I become a delivery partner for yourdrop?</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term6" className="title">Which all locations is yourdrop offering its service?</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 className="content-title">Answering your questions about yourdrop</h1>
                    <p id="term1" className="content-title">How can I place my order on Yourdrop?</p>
                    <p className="content-text">Yourdrop offers you multiple mediums to place your order the mediums that you can place your order are- Website, Mobile Application (both Android &amp; iOS) and WhatsApp. You can place your order via any of the above suggested mediums on Yourdrop. For more details visit <a href="http://yourdrop.in/" target="_blank">yourdrop.in</a></p>
                    
                    <p id="term2" className="content-title">Can we order on Yourdrop all daily needs products?</p>
                    <p className="content-text">Yes, Yourdrop provides you the delivery of all daily needs products as well as as other essential items, pet supplies, grocery, fruits and much more</p>
                    
                    <p id="term3" className="content-title">Is COD available on Yourdrop?</p>
                    <p className="content-text">No, currently Yourdrop does not offer COD but for other payment modes you can check the details on our Payments Page listed on Yourdrop.in</p>
                    
                    <p id="term4" className="content-title">How can I partner my Shop with Yourdrop?</p>
                    <p className="content-text">Yourdrop always welcomes shop owners to be a part of our network, to do so you can call us on (number to be mentioned ) or mail us at <a href="mailto:info@yourdrop.in">info@yourdrop.in</a>.</p>
                    
                    <p id="term5" className="content-title">  How can I become a delivery partner for yourdrop?</p>
                    <p className="content-text">Yourdrop is always looking for able delivery providers who can partner with yourdrop and help themselves as well as yourdrop succeed. To become a delivery partner with yourdrop call us at(number to be mentioned) or mail us at <a href="mailto:info@yourdrop.in">info@yourdrop.in</a></p>
                    
                    <p id="term6" className="content-title">  Which all locations is yourdrop offering its service?</p>
                    <p className="content-text">Currently yourdrop is operating in the region of Delhi-NCR but soon will be expanding its operations to other places as well. You will be notified about new locations as we start operating there.</p>
                </div>
            </div>
    )
}

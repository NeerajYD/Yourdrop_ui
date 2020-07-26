import React from 'react'
import anchor from '../images/anchor.svg';

export default function AboutUs() {
  return (
    <div className="container terms-content">
                <div className="anchor-container">
                    <div className="anchorBox">
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="#term1" className="title">About us</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    <h1 id="term1" className="content-title">Know more about yourdrop</h1>
                    <p className="content-text">Yourdrop provides you Best services by covering all your needs on a day to day basis and delivering it at your doorstep. We offer our services in Retail and other essential daily needs requirement.</p>
                    <p className="content-text">We serve the buyers we also help out the vendors to set up their business online with us and start being a smart shop in catering their customers with full potential.</p>
                    <p className="content-text">Our Application helps the customers as well as vendors to interconnect and fulfill the requirements of a customer as well as empower the vendors who connect with us to grow their business.</p>
                    <p className="content-text">Yourdrop provides you best services by covering all your needs on a day to day basis and delivering it at your doorstep. We offer our services in Retail and other essential daily needs requirement.</p>
                    <p className="content-text">We serve the buyers and also help out the vendors to set up their business online with us and start being a smart shop in catering their customers with full potential</p>
                </div>
            </div>
  )
}

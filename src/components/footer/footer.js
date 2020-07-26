import React from 'react';
import './footer.css';
import logo from '../../images/logo.png';
import scooter from '../../images/scooter-footer.png';
import { Link } from 'react-router-dom';
const $ = window.$;

class Footer extends React.Component {
    componentDidMount() {
        
         
      }
    render() {
        return (
        
        <div>
<footer className="" data-animate data-animation-classes="fadeInUp">

<img src={scooter} className="scooter-footer parallax_scooter" alt="" />

    <div className="container">
        <div className="row">
            <div className="col-md-4 about-bottom animated fadeInLeft">
                <img src={logo} alt="YourDrop" />

                <p>Yourdrop provides you Best services by covering all your needs on a day to day basis
                    and delivering it at your doorstep. We offer our services in Retail as well as other
                    essential requirements that are part of your daily life.</p>

                <p> Along with Buyers we also help out the vendors to set up their business online with
                    us and start being a smart shop in catering their customers with full potential.</p>
            </div>

            <div className="col-md-3 col-md-offset-2 bottom-right-info animated fadeInRight">

            <div className="heading">Services</div>
                <ul className="col-md-12">
                   <li><Link to="/Bakery_order" onClick={() => window.location.reload()}>Deli/Bakery Ordering</Link></li>
                   <li><Link to="/Fruits_vegetables" onClick={() => window.location.reload()}>Fruits and Vegetables</Link></li>
                   <li><Link to="/Beverages" onClick={() => window.location.reload()}>Beverages</Link></li>
                   <li><Link to="/Baby_care" onClick={() => window.location.reload()}>Baby Care</Link></li>
                   <li><Link to="/Household_care" onClick={() => window.location.reload()}>Household Care</Link></li>
                   <li><Link to="/Personal_care" onClick={() => window.location.reload()}>Personal Care</Link></li>
                    <li><Link to="/Meat_shop" onClick={() => window.location.reload()}>Meat Shop</Link></li>
                </ul>
                </div>

                <div className="col-md-3 bottom-right-info animated fadeInRight">
                <ul className="col-md-12">
                    <li><Link to="/Aboutus" onClick={() => window.location.reload()}>About us</Link></li>
                    <li><Link to="/Term_condition" onClick={() => window.location.reload()}>Terms and Conditions</Link></li>
                    <li><Link to="/Cancellation_policy" onClick={() => window.location.reload()}>Refund and Cancellation</Link></li>
                    <li><Link to="/Privacy_policy" onClick={() => window.location.reload()}>Privacy Policy</Link></li>
                    <li><Link to="/Faq" onClick={() => window.location.reload()}>FAQ’s</Link></li>
                </ul>

                <span className="social-icons">
                <div className="followus">Follow Us</div>
                <a href="https://www.facebook.com/YourDropIndia/"target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="prefix__facebook_3_" width="32" height="32" data-name="facebook (3)" viewBox="0 0 57.942 57.942" fill="#747474">
                                        <defs>
                                        </defs>
                                        <path id="prefix__Path_589" d="M291.582 508.668q-.362.059-.727.109.365-.05.727-.109zm0 0" className="prefix__cls-1" data-name="Path 589" transform="translate(-257.94 -451.103)"></path>
                                        <path id="prefix__Path_590" d="M299.686 507.793l-.346.061.346-.061zm0 0" className="prefix__cls-1" data-name="Path 590" transform="translate(-265.464 -450.327)"></path>
                                        <path id="prefix__Path_591" d="M278.461 510.34q-.424.048-.852.084.428-.036.852-.084zm0 0" className="prefix__cls-1" data-name="Path 591" transform="translate(-246.193 -452.586)"></path>
                                        <path id="prefix__Path_592" d="M286.854 509.738l-.408.051.408-.051zm0 0" className="prefix__cls-1" data-name="Path 592" transform="translate(-254.029 -452.052)"></path>
                                        <path id="prefix__Path_593" d="M306.97 506.41l-.306.064zm0 0" className="prefix__cls-1" data-name="Path 593" transform="translate(-271.96 -449.101)"></path>
                                        <path id="prefix__Path_594" d="M324.731 502.113l-.247.069zm0 0" className="prefix__cls-1" data-name="Path 594" transform="translate(-287.763 -445.29)"></path>
                                        <path id="prefix__Path_595" d="M319.327 503.543l-.269.07zm0 0" className="prefix__cls-1" data-name="Path 595" transform="translate(-282.951 -446.558)"></path>
                                        <path id="prefix__Path_596" d="M312.352 505.254l-.286.064zm0 0" className="prefix__cls-1" data-name="Path 596" transform="translate(-276.751 -448.075)"></path>
                                        <path id="prefix__Path_597" d="M273.938 511.09q-.229.019-.458.034.23-.015.458-.034zm0 0" className="prefix__cls-1" data-name="Path 597" transform="translate(-242.531 -453.251)"></path>
                                        <path id="prefix__Path_598" d="M57.942 28.971a28.971 28.971 0 1 0-28.971 28.971c.17 0 .34 0 .509-.007V35.383h-6.224v-7.254h6.224v-5.338c0-6.191 3.779-9.56 9.3-9.56a51.236 51.236 0 0 1 5.58.285v6.47h-3.806c-3 0-3.586 1.428-3.586 3.523v4.62h7.183l-.936 7.254h-6.247v21.44a28.987 28.987 0 0 0 20.974-27.852zm0 0" className="prefix__cls-1" data-name="Path 598"></path>
                                        <path id="prefix__Path_599" d="M265.8 511.43q-.452.029-.908.045.454-.015.908-.045zm0 0" className="prefix__cls-1" data-name="Path 599" transform="translate(-234.914 -453.552)"></path>
                                        <path id="prefix__Path_600" d="M260.985 511.836q-.24.008-.481.012.241-.004.481-.012zm0 0" className="prefix__cls-1" data-name="Path 600" transform="translate(-231.023 -453.913)"></path>
                                    </svg>
                                    </a>
                                    <a href="https://www.instagram.com/yourdrop_in/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="prefix__instagram_2_" width="32" height="32" data-name="instagram (2)" viewBox="0 0 57.942 57.942" fill="#747474">
                                            <defs>
                                            </defs>
                                            <path id="prefix__Path_601" d="M218.09 212.545a5.545 5.545 0 1 1-5.545-5.545 5.545 5.545 0 0 1 5.545 5.545zm0 0" className="prefix__cls-1" data-name="Path 601" transform="translate(-183.574 -183.574)"></path>
                                            <path id="prefix__Path_602" d="M162.091 139.315a5.509 5.509 0 0 0-3.157-3.157 9.2 9.2 0 0 0-3.089-.572c-1.755-.08-2.281-.1-6.722-.1s-4.968.017-6.722.1a9.21 9.21 0 0 0-3.089.573 5.511 5.511 0 0 0-3.158 3.157 9.207 9.207 0 0 0-.572 3.089c-.08 1.754-.1 2.28-.1 6.722s.017 4.968.1 6.722a9.2 9.2 0 0 0 .572 3.089 5.509 5.509 0 0 0 3.157 3.157 9.193 9.193 0 0 0 3.089.573c1.754.08 2.28.1 6.722.1s4.969-.017 6.722-.1a9.193 9.193 0 0 0 3.089-.573 5.509 5.509 0 0 0 3.157-3.157 9.213 9.213 0 0 0 .573-3.089c.08-1.755.1-2.281.1-6.722s-.017-4.968-.1-6.722a9.193 9.193 0 0 0-.572-3.09zm-12.968 18.354a8.542 8.542 0 1 1 8.542-8.542 8.542 8.542 0 0 1-8.542 8.542zM158 142.243a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0 0" className="prefix__cls-1" data-name="Path 602" transform="translate(-120.152 -120.155)"></path>
                                            <path id="prefix__Path_603" d="M28.971 0a28.971 28.971 0 1 0 28.971 28.971A28.974 28.974 0 0 0 28.971 0zm16.535 35.83a12.205 12.205 0 0 1-.773 4.038 8.506 8.506 0 0 1-4.865 4.865 12.214 12.214 0 0 1-4.038.773c-1.774.081-2.341.1-6.859.1s-5.085-.019-6.859-.1a12.214 12.214 0 0 1-4.038-.773 8.506 8.506 0 0 1-4.865-4.865 12.2 12.2 0 0 1-.773-4.038c-.082-1.774-.1-2.341-.1-6.859s.019-5.085.1-6.859a12.206 12.206 0 0 1 .773-4.038 8.512 8.512 0 0 1 4.866-4.865 12.217 12.217 0 0 1 4.038-.773c1.774-.081 2.341-.1 6.859-.1s5.085.019 6.859.1a12.219 12.219 0 0 1 4.038.772 8.509 8.509 0 0 1 4.865 4.866 12.2 12.2 0 0 1 .774 4.038c.081 1.774.1 2.341.1 6.859s-.02 5.085-.102 6.859zm0 0" className="prefix__cls-1" data-name="Path 603"></path>
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/YourdropIndia" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 57.942 57.942" fill="#747474">
                                            <path id="prefix__twitter" d="M28.971 0a28.971 28.971 0 1 0 28.971 28.971A28.974 28.974 0 0 0 28.971 0zM42.2 22.588q.019.428.019.859c0 8.787-6.688 18.919-18.92 18.92a18.822 18.822 0 0 1-10.193-2.987 13.524 13.524 0 0 0 1.586.092 13.343 13.343 0 0 0 8.259-2.846 6.657 6.657 0 0 1-6.212-4.619 6.627 6.627 0 0 0 3-.114 6.651 6.651 0 0 1-5.335-6.518v-.085a6.6 6.6 0 0 0 3.012.832 6.655 6.655 0 0 1-2.059-8.877 18.879 18.879 0 0 0 13.707 6.948A6.653 6.653 0 0 1 40.4 18.128a13.337 13.337 0 0 0 4.223-1.614 6.676 6.676 0 0 1-2.923 3.678 13.262 13.262 0 0 0 3.819-1.047 13.514 13.514 0 0 1-3.319 3.443zm0 0"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/company/yourdrop/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 57.942 57.942" fill="#747474">
                                            <path id="prefix__linkedin" d="M28.971 0a28.971 28.971 0 1 0 28.971 28.971A28.974 28.974 0 0 0 28.971 0zm-8.419 43.8H13.5V22.569h7.056zm-3.527-24.13h-.046a3.677 3.677 0 1 1 .093-7.335 3.679 3.679 0 1 1-.047 7.335zM45.994 43.8h-7.055V32.44c0-2.854-1.022-4.8-3.575-4.8a3.862 3.862 0 0 0-3.62 2.58 4.832 4.832 0 0 0-.232 1.722V43.8h-7.055s.092-19.236 0-21.227h7.055v3.006a7 7 0 0 1 6.359-3.5c4.642 0 8.123 3.034 8.123 9.554zm0 0"></path>
                                        </svg>
                                    </a>

                </span>


            </div>
        </div>


    </div>
</footer>

<div class="all-item-list">
    
    {/* Apna Bazaar Items List*/}
<div id="apna-bazaar-item" class="modal fade" role="dialog">
<div class="modal-dialog">
    <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tr>
            <td width="80%"><strong>Item List</strong></td><td width="20%"><strong>Quantity</strong></td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
    </table>
</div>
</div>
    
    {/* Sweet Corner Items List*/}
<div id="sweet-corner-item" class="modal fade" role="dialog">
<div class="modal-dialog">
    <table width="100%" border="1" cellspacing="0" cellpadding="0">
        <tr>
            <td width="80%"><strong>Item List</strong></td><td width="20%"><strong>Quantity</strong></td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
        <tr>
            <td>Kaju Barfi</td><td>300rs per kg</td>
        </tr>
    </table>
</div>
</div>


</div>
</div>

        );
    }
}

export default Footer;

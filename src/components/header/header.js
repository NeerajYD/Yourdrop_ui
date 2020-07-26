import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
const $ = window.$;

class Header extends React.Component {


    render() {
        return (
                <div className="header-shadow">
         <div className="col-md-12">
             <div className="row">
                 <header>
                     <div className="container">
                         <div className="row">
                             <div className="col-md-6 col-sm-4 col-xs-9 animated fadeInLeft logo-top">
                                 <div className="brand">
                                     <a href="/"> 
                                         <img className="you-logo" src={logo} alt="YourDrop" /> 
                                     </a>
                                 </div>
                             </div>
                             <div className="col-md-6 col-sm-8 animated fadeInRight">
                                 <div className="navbar-header">
                                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                         data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                         <span className="sr-only">Toggle navigation</span>
                                         <span className="icon-bar"></span>
                                         <span className="icon-bar"></span>
                                         <span className="icon-bar"></span>
                                     </button>
                                 </div>
                                 <nav className="navbar navbar-default">
                                     <div id="navbar" className="navbar-collapse collapse">
                                         <ul>
                                             <li><a href="/For_business">For Business</a></li>
                                             <li><a href="/Partner_with_us">Partner with us</a></li>
                                         </ul>
                                     </div>
                                 </nav>
                             </div>
                         </div>
                     </div>
                 </header>
             </div>
         </div>
     </div>

        );
    }
}

export default Header;

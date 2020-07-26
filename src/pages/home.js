import React from 'react'
import vendor from '../images/vendor-img.png';
import rider from '../images/rider-img.png';
import ydblack from '../images/yourdrop-black.svg';
import Slider from '../components/category_slider/Slider_category';

export default function home() {
    return (
        <div>
            <div className="hero-banner skewed">
            <img className="banner-guy fadeInRight" src="/images/banner-guy.png" />
            <img className="banner-guy2 fadeInRight parallax_scroll" src="/images/banner-guy2.png" />
            <div className="container">
               <img src="/images/search-bg.png" className="yourdrop-bg" alt="" />
               <div className="col-md-5 col-sm-6 search-sec animated fadeInLeft">
                  <strong>Serving You With Quality</strong>
                  <p>Discover a range of products for grocery, daily needs and other essential items.</p>
                     <div className="new-search">
                        <select id="area" className="selectArea">
                           <option value="" disabled selected>Select Area</option>
                        </select>
                        <input id="text-value" className="search-shop" type="text" />
                        <button id="search" className="searchBtn">Search</button>
   
                     </div>
   
               </div>
            </div>
         </div>



         <div className="container" id="oursearch">
           <Slider />
           </div>


         <div id="resultRow">
                <div className="container">
                    <div className="col-md-12 directory-heading">Results</div>

                    <div className="col-md-12">
                        <div className="row">
                                <div className="tab-content">

                                    <div id="all" className="container tab-pane active">
                                        <div className="row" id="resultContainer">


                                        </div>

                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
           <br />

        <div className="howitworks" data-animate data-animation-classes="fadeInUp">
            <div className="container">
               <h2 className="text-center animated fadeInUp">How it works</h2>
               <div className="col-md-4 text-center animated fadeInLeft">
                  <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 85.419 85.419" fill="#1370fc">
                     
                     <g id="prefix__groceries" transform="translate(-1 -1)">
                        <path id="prefix__Path_998" d="M86.419 21.666v-1.653a6.829 6.829 0 0 0-.53-2.649L79.072 1H24.88l-6.818 16.363a6.853 6.853 0 0 0-.529 2.649v1.653a6.857 6.857 0 0 0 2.755 5.475v6.924h-4.133a4.128 4.128 0 0 0-3.88 2.755H7.889A6.9 6.9 0 0 0 1 43.709V79.53a6.9 6.9 0 0 0 6.889 6.889H38.2a6.9 6.9 0 0 0 6.889-6.889V75.4h41.33v-6.891a4.128 4.128 0 0 0-2.755-3.88V27.141a6.857 6.857 0 0 0 2.755-5.475zM79.53 25.8a4.138 4.138 0 0 1-4.13-4.134v-1.378h8.266v1.378A4.138 4.138 0 0 1 79.53 25.8zM50.6 63V49.22a1.379 1.379 0 0 1 1.378-1.378h4.133v5.511h11.02v-5.51h4.133a1.379 1.379 0 0 1 1.378 1.378V63a1.379 1.379 0 0 1-1.378 1.378H51.976A1.379 1.379 0 0 1 50.6 63zm8.266-15.155h5.511V50.6h-5.513zm-25.054-2.758h3.009v33.066H9.266V45.087h3.009a4.128 4.128 0 0 0 3.88 2.755h13.777a4.128 4.128 0 0 0 3.88-2.755zM20.288 21.666v-1.378h8.266v1.378a4.133 4.133 0 1 1-8.266 0zm11.022-1.378h8.266v1.378a4.133 4.133 0 0 1-8.266 0zm11.022 0H50.6v1.378a4.133 4.133 0 1 1-8.266 0zm11.022 0h8.266v1.378a4.133 4.133 0 1 1-8.266 0zm11.022 0h8.266v1.378a4.133 4.133 0 1 1-8.266 0zM26.718 3.755h50.517l5.74 13.777h-62zm-3.674 24.66a6.782 6.782 0 0 0 5.511-1.274v6.924h-5.511zM14.777 38.2a1.379 1.379 0 0 1 1.378-1.378h13.777A1.379 1.379 0 0 1 31.31 38.2v5.511a1.379 1.379 0 0 1-1.378 1.378H16.155a1.379 1.379 0 0 1-1.378-1.378zm27.555 41.33a4.138 4.138 0 0 1-4.132 4.133H7.889a4.138 4.138 0 0 1-4.134-4.133V43.709a4.138 4.138 0 0 1 4.133-4.133h4.133v2.755H9.266a2.758 2.758 0 0 0-2.755 2.755v33.067a2.758 2.758 0 0 0 2.755 2.755h27.555a2.758 2.758 0 0 0 2.755-2.755V45.087a2.758 2.758 0 0 0-2.755-2.755h-2.756v-2.756H38.2a4.138 4.138 0 0 1 4.133 4.133zM38.2 36.821h-4.388a4.129 4.129 0 0 0-2.5-2.5v-7.18a6.8 6.8 0 0 0 9.644-1.385 6.826 6.826 0 0 0 11.022 0 6.826 6.826 0 0 0 11.022 0 6.8 6.8 0 0 0 9.644 1.385v18.2a4.087 4.087 0 0 0-1.378-.253h-19.29a4.138 4.138 0 0 0-4.133 4.133V63a4.087 4.087 0 0 0 .253 1.378h-3.009V43.709a6.9 6.9 0 0 0-6.887-6.888zm45.463 35.821H45.087v-5.511h37.2a1.379 1.379 0 0 1 1.378 1.378zm-2.755-8.266H75.4V27.141a6.781 6.781 0 0 0 5.511 1.274z" className="prefix__cls-1" data-name="Path 998"/>
                        <path id="prefix__Path_999" d="M27.936 42.293l-3.126 3.126a8.183 8.183 0 1 0 1.722 2.174l3.352-3.352zm-3.159 9.24a5.511 5.511 0 1 1-5.511-5.511 5.46 5.46 0 0 1 3.582 1.358l-3.582 3.582-1.781-1.781-1.948 1.949 3.73 3.73 5.171-5.171a5.471 5.471 0 0 1 .339 1.844z" className="prefix__cls-1" data-name="Path 999" transform="translate(3.777 15.597)"/>
                        <path id="prefix__Path_1000" d="M23 37h2.755v2.755H23z" className="prefix__cls-1" data-name="Path 1000" transform="translate(8.31 13.598)"/>
                        <path id="prefix__Path_1001" d="M9 37h16.533v2.755H9z" className="prefix__cls-1" data-name="Path 1001" transform="translate(3.022 13.598)"/>
                        <path id="prefix__Path_1002" d="M21.77 13.751l2.247-6h11.445V5H22.107l-2.919 7.781z" className="prefix__cls-1" data-name="Path 1002" transform="translate(6.87 1.511)"/>
                        <path id="prefix__Path_1003" d="M33 5h2.755v2.755H33z" className="prefix__cls-1" data-name="Path 1003" transform="translate(12.087 1.511)"/>
                     </g>
                  </svg>
                  </figure>
                  <figcaption>Online access to your <br />favourite stores</figcaption>
                  <p>Place your order, track it and get delivered from your favourite stores to your doorstep</p>
               </div>
               <div className="col-md-4 text-center animated fadeInUp">
                  <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" id="prefix__food-delivery" width="50" height="50" viewBox="0 0 100.868 95.352">
    <path id="prefix__Path_1004" fill="#1370fc" d="M5.353 42.364h17.105a5.361 5.361 0 0 1 5.353 5.356v19.688h6.4a14.7 14.7 0 0 1-.4-4.591c.139-7.5 1.5-13.817 4.044-18.782a20.153 20.153 0 0 1 6.261-7.548 13.7 13.7 0 0 1-3.665-9.7 12.537 12.537 0 1 1 25.07 0 1.477 1.477 0 0 1-1.478 1.478h-1a10.4 10.4 0 0 1 .142 1.7 10.259 10.259 0 0 1-8.243 10.05 24.9 24.9 0 0 1 .735 6.427l3.685 3.17 8.967.725 10.344-3.419c.948-.315 2.022-.671 2.955 0a2.624 2.624 0 0 1 .919 2.2v7.69a1.477 1.477 0 0 1-1.478 1.478H79.3l2.7 9.328a1.478 1.478 0 0 1-2.839.822l-2.935-10.145h-4.2c5.225 15.932 2.244 26.567-2.339 37.33h2.656l11.063-12.37-2.339-8.081a1.478 1.478 0 0 1 2.839-.822l2.237 7.73A14.862 14.862 0 0 1 100.83 93.6a1.477 1.477 0 0 1-1.109 1.771l-2.1.483a11.305 11.305 0 0 1-21.848 5.028l-1.655.381a1.929 1.929 0 0 1-1.428-.08 1.7 1.7 0 0 1-.832-1.134 14.7 14.7 0 0 1-.238-1.471h-30.9a12.591 12.591 0 0 1-24.919 0H14.399a2.024 2.024 0 0 1-1.534-.557 1.894 1.894 0 0 1-.522-1.437 16.75 16.75 0 0 1 .605-4c-1.177-7.145-.045-11.5 1.634-14.9a3.89 3.89 0 0 1-1.765-3.256v-4.065H5.353A5.361 5.361 0 0 1 0 65.007V47.72a5.36 5.36 0 0 1 5.353-5.356zm76.586 61.651a8.288 8.288 0 0 0 6.3 1.062 8.372 8.372 0 0 0 6.472-8.552l-16.027 3.689a8.306 8.306 0 0 0 3.253 3.8zm-7.393-5.884l22.984-5.289a11.9 11.9 0 0 0-11.764-7.8L74.507 97.635q.014.249.039.496zM52.228 72.383a13.155 13.155 0 0 1 .429 4.456v5.576h5.41v-7.65c0-8.648-4.72-10.189-6.838-10.444H36.743a6.264 6.264 0 0 0 1.342 4.244c.98 1.032 2.657 1.535 5.126 1.537l5.3.006a3.56 3.56 0 0 1 3.713 2.275zm.429 12.987v3.53h10.536a4.21 4.21 0 0 0-1.019-2.527 3.645 3.645 0 0 0-2.63-1zm-15.848-24h13.437a55.173 55.173 0 0 0 1.416-5.47l-4.085-2.652c-2.23-1.448-3.39-3.495-3.183-5.615a5.224 5.224 0 0 1 3.255-4.276 5.334 5.334 0 0 1 4.959.546 17.446 17.446 0 0 0-.714-3.746 10.415 10.415 0 0 1-1.87-.369 12.241 12.241 0 0 1-3.449-1.367c-2.846 1.699-9.105 7.214-9.767 22.946zm25.646-36.06A9.566 9.566 0 0 0 43.4 26.784c0 4.408 2.114 7.961 5.522 9.524v-7.774a2.94 2.94 0 0 1 2.969-3.221q.067-.006.134-.006zm-2.232 4.658a7.357 7.357 0 0 0-.2-1.7H52.1c-.091.01-.158.02-.205.03a1.758 1.758 0 0 0-.014.242v8.644a7.309 7.309 0 0 0 1.06.078h.01a7.293 7.293 0 0 0 7.272-7.298zM62.138 52.8l-3.5-.283a1.478 1.478 0 0 1-.845-.352l-6.316-5.433a2.935 2.935 0 0 0-1.9-.8 2.275 2.275 0 0 0-2.245 1.982c-.1 1 .56 2.01 1.851 2.849l7.038 4.568h5.914V52.8zm6.244.505l-3.289-.266v2.3h3.822c.5 0 .616-.412.63-.757a1.173 1.173 0 0 0-1.162-1.275zm3.5-1.02a4.268 4.268 0 0 1 .544 3.037v.012h7.159v-5.607l-7.71 2.549.006.011zm-2.972 6H55.786a1.477 1.477 0 0 1-.8-.238l-.669-.434c-.322 1.422-.688 2.806-1.087 4.113 3.013.89 7.8 3.764 7.8 13.034v7.8a6.167 6.167 0 0 1 3.289 1.766 7.207 7.207 0 0 1 1.84 4.574h2.981c3-8.656 4.146-17.868-.232-30.606zm-2.438 37.331c.546-1.256 1.073-2.507 1.568-3.763H52.7c-1.988 0-3-.905-3-2.69V78.316H38.039a1.478 1.478 0 1 1 0-2.955h11.652a6.688 6.688 0 0 0-.227-1.931c-.075-.2-.139-.367-.951-.367l-5.305-.006c-3.323 0-5.7-.807-7.267-2.457-.072-.076-.141-.157-.21-.236h-19.96v4.061a.948.948 0 0 0 .935.937h14.71a1.478 1.478 0 1 1 0 2.955H17.574a17.445 17.445 0 0 0-2.156 9.126 16.035 16.035 0 0 1 24.423-1.907 16.278 16.278 0 0 1 4.645 10.085zM28.261 106.4a9.736 9.736 0 0 0 9.457-7.82H18.8a9.737 9.737 0 0 0 9.461 7.82zM17.125 95.621h24.394a13.254 13.254 0 0 0-13.074-11.895 13.111 13.111 0 0 0-12.574 9.395l-.017.052a13.638 13.638 0 0 0-.488 2.448zM2.955 65.007a2.4 2.4 0 0 0 2.4 2.4h19.5v-7.63h-21.9zm0-8.184h21.9V53.68h-21.9zm0-6.1h21.9v-3a2.4 2.4 0 0 0-2.4-2.4H5.353a2.4 2.4 0 0 0-2.4 2.4z" data-name="Path 1004" transform="translate(0 -14)"/>
</svg>
                  </figure>
                  <figcaption>Fast home <br />delivery</figcaption>
                  <p>Your order gets delivered at a fast pace. On time delivery guaranteed</p>
               </div>
               <div className="col-md-4 text-center animated fadeInRight">
                  <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 96.378 86.75" fill="#1370fc">
                     
                     <g id="prefix__shopping_·_cart_·_ecommerce_·_add_·_online" data-name="shopping · cart · ecommerce · add · online" transform="translate(-2 -8)">
                        <path id="prefix__Path_1005" d="M80.71 8a17.681 17.681 0 0 0-17.67 17.67 17.138 17.138 0 0 0 .692 4.822H26.673l-1.88-17.85A5.14 5.14 0 0 0 19.669 8H6.819a4.694 4.694 0 0 0-3.39 1.414 4.764 4.764 0 0 0-1.3 4.5 5.033 5.033 0 0 0 4.947 3.727h7.951l6.056 54.631a8.032 8.032 0 0 0 .193 16.047h8.192a8.032 8.032 0 0 0 15.742 0h16.384a8.032 8.032 0 0 0 15.742 0h6.586a1.606 1.606 0 1 0 0-3.213h-6.586a8.032 8.032 0 0 0-15.742 0H45.21a8.032 8.032 0 0 0-15.742 0h-8.192a4.819 4.819 0 1 1 0-9.638h61.6a4.8 4.8 0 0 0 4.723-3.9l6.636-34.558A17.649 17.649 0 0 0 80.71 8zM69.465 81.891a4.819 4.819 0 1 1-4.819 4.819 4.819 4.819 0 0 1 4.819-4.819zm-32.126 0a4.819 4.819 0 1 1-4.819 4.819 4.819 4.819 0 0 1 4.819-4.819zm47.113-10.939a1.606 1.606 0 0 1-1.574 1.3h-58.55l-6.12-54.984a3.213 3.213 0 0 0-3.2-2.843H7.076a1.817 1.817 0 0 1-1.815-1.237 1.524 1.524 0 0 1 .45-1.51 1.491 1.491 0 0 1 1.108-.466h12.85A1.948 1.948 0 0 1 21.6 12.98l2.04 19.276a1.606 1.606 0 0 0 1.59 1.446h39.754a17.856 17.856 0 0 0 2.1 3.213h-41.23a1.606 1.606 0 0 0-1.189.53 1.664 1.664 0 0 0-.418 1.237l2.843 28.914a1.606 1.606 0 0 0 1.59 1.446h52.03a1.606 1.606 0 0 0 1.59-1.349l4.225-25.348A18.7 18.7 0 0 0 90.3 40.5zM56.615 56.19v-6.426h11.6l-.725 6.426zm10.521 3.21l-.723 6.425h-9.8V59.4zM56.615 46.552v-6.425h12.658l-.707 6.425zM42.527 56.19l-.727-6.426h11.6v6.426zM53.4 59.4v6.425h-9.8l-.719-6.425zM41.451 46.552l-.707-6.425H53.4v6.425zm-2.875 3.213l.724 6.425H29.2l-.626-6.425zm-10.329-3.213l-.626-6.425H37.5l.723 6.425zM39.652 59.4l.707 6.425H30.143l-.627-6.425zm42.375-9.638l-1.076 6.428H70.718l.723-6.425zm-10.232-3.21l.594-5.3a17.077 17.077 0 0 0 10.746 1.9l-.578 3.405zM80.421 59.4l-1.076 6.425h-9.687l.707-6.425zm.289-19.276A14.457 14.457 0 1 1 95.167 25.67 14.457 14.457 0 0 1 80.71 40.127z" className="prefix__cls-1" data-name="Path 1005"/>
                        <path id="prefix__Path_1006" d="M53.638 24.851v8.032a1.606 1.606 0 1 0 3.213 0v-8.032h8.032a1.606 1.606 0 0 0 0-3.213h-8.032v-8.032a1.606 1.606 0 1 0-3.213 0v8.032h-8.032a1.606 1.606 0 1 0 0 3.213z" className="prefix__cls-1" data-name="Path 1006" transform="translate(25.465 2.425)"/>
                     </g>
                  </svg>
                  </figure>
                  <figcaption>All essentials <br />under one roof</figcaption>
                  <p>Order a variety of products ranging from grocery, daily needs items to other essentials</p>
               </div>
            </div>
         </div>



                    <div className="row" id="filterCardContainer">
                    </div>
                    

         <div className="ordernow-sec animated" data-animate data-animation-classes="fadeInUp">
            <div className="container">
            <img src="/images/yourdrop-blue.png" className="yourdropblue animated fadeInLeft" alt="yourdrop" />
               <div className="col-md-5 col-sm-6 animated fadeInLeft">
               <strong>Flexibile, scalable  <br />same-day delivery.</strong>
               <a href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered" target="_blank">Order Now</a>
               </div>
            </div>
            <img src="/images/scooter-img.png" className="scooter fadeInRight parallax_scroll" alt="yourdrop" />
         </div>

         <br />
         <br />
        <div className="shop-brands animated hide" data-animate data-animation-classes="fadeInUp">
          <div className="container">
              <h2 className="text-center animated fadeInUp">Shop by Brands</h2>
              <div className="row animated fadeInUp">
                <ul>
                    <li>
                    <img src="/images/brand1.png" alt="" />
                    </li>
                    <li>
                    <img src="/images/brand2.png" alt="" />
                    </li>
                    <li>
                    <img src="/images/brand3.png" alt="" />
                    </li>
                    <li>
                    <img src="/images/brand4.png" alt="" />
                    </li>
                </ul>
              </div>
          </div>
        </div>

        <div>
          <div className="container">
               <div className="row vendorrider animated" data-animate data-animation-classes="fadeInUp">
                  <div className="col-md-12 animated fadeInLeft">
                     <div className="inner-blue">
                  <div className="heading">Vendor</div>
                                <ul>
                                    <li>- Build online presence</li>
                                    <li>- Increase revenue</li>
                                    <li>- Increase customer reach</li>
                                </ul>
                                <br />
                                <br />
                                <img src={vendor} alt="" />
                  </div>
                  </div>
                  <div className="col-md-12 animated fadeInLeft">
                     <div className="inner-blue">
                                <img src={rider} alt="" />
                                <br />
                                <br />
                  <div className="heading">Rider</div>
                                <ul>
                                    <li>- Weekly payments</li>
                                    <li>- Flexible working hours</li>
                                    <li>- Referral bonus</li>
                                </ul>
                  </div>
                  </div>
                  <div className="col-md-12 animated fadeInRight">
                  <div className="inner-blue partner-with-us">
                     <img src={ydblack} className="yourdrop-black" alt="yourdrop" />
                  <div className="heading">Partner with us<br /><strong>7290865352</strong></div>
                  </div>
                  </div>
               </div>
            </div>
            </div>
        </div>
    )
}

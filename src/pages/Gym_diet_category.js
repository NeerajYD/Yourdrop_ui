import React from 'react'
import anchor from '../images/anchor.svg';

export default function Gym_diet_category() {
    return (
        <div>
        <div className="category_heading text-center">
            GYM DIET
        </div>
        <div className="container category-inner">

                <ul className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Gym Diet</li>
                </ul>

                <div className="row">

                <div className="anchor-container col-sm-3 hidden-xs">
                    <div className="anchorBox animated fadeInLeft">
                        <div className="anchor">
                            <h2 className="title">
                                CATEGORIES
                            </h2>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Cake_category" className="title">Cakes</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Groceries_category" className="title">Grocery stores</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Meat_shop_category" className="title">Meat shop</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Vegetable_fruit_category" className="title">Vegetables and Fruits</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Restaurants_categories" className="title">Restaurants</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Gym_diet_category" className="title">Gym Diet</a>
                        </div>
                        <div className="anchor">
                            <img src={anchor} alt="anchor" />
                            <a href="./Ice_cream_category" className="title">Ice Cream</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox col-sm-9 col-xs-12 animated fadeInRight">
                <div className="storeinfo">
                <div className="items-box">
                <a target="_blank" href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered">
                    <img src="images/gagan-img.jpg" alt="Store" className="img-responsive" />
                    <ul className="information">
                        <strong>Gagan Di Kitchen</strong>
                        <li className="store-address"><i className="fa fa-map-marker" aria-hidden="true"></i> House 3/1, Savitri Nagar, Malviya Nagar, New Delhi</li>
                        
                        <li className="store-open"><span>Order Now</span></li>
                    </ul>
                </a>
            </div>
        </div>
                <div className="storeinfo">
                <div className="items-box">
                <a target="_blank" href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered">
                    <img src="images/gagan-img.jpg" alt="Store" className="img-responsive" />
                    <ul className="information">
                        <strong>Healthy Diet Kitchen</strong>
                        <li className="store-address"><i className="fa fa-map-marker" aria-hidden="true"></i> House 3/1, Savitri Nagar, Malviya Nagar, New Delhi</li>
                        
                        <li className="store-open"><span>Order Now</span></li>
                    </ul>
                </a>
            </div>
        </div>
                </div>
                </div>
            </div>
            </div>
    )
}

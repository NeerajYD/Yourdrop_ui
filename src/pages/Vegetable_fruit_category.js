import React from 'react'
import anchor from '../images/anchor.svg';

export default function Vegetable_fruit_category() {
    return (
        <div>
        <div className="category_heading text-center">
            VEGETABLES AND FRUITS
        </div>
        <div className="container category-inner">

<ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Fruits and Vegetables</li>
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
                <div class="storeinfo">
                <div class="items-box">
                <a target="_blank" href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered">
                    <img src="images/freshgreen-img.jpg" alt="Store" class="img-responsive" />
                    <ul class="information">
                        <strong>Fresh Green Vegetables &amp; Fruits Shop</strong>
                        <li class="store-address"><i class="fa fa-map-marker" aria-hidden="true"></i> Shop No.1, S-Block, DDA Mkt, Panchsheel Park, New Delhi</li>
                        
                        <li class="store-open"><span>Order Now</span></li>
                    </ul>
                </a>
            </div>
        </div>
        <div class="storeinfo">
            <div class="items-box">
                <a target="_blank" href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered">
                    <img src="images/delhi-state.jpg" alt="Store" class="img-responsive" />
                    <ul class="information">
                        <strong>Delhi State Fruit and Vegetable</strong>
                        <li class="store-address"><i class="fa fa-map-marker" aria-hidden="true"></i> Unit-19B, Sheikh Sarai, Ph-II, New Delhi</li>
                        <li class="store-open"><span>Order Now</span></li>
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
